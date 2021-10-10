import React, { useState } from "react";
import { storage } from "../firebase"
import axios from '../axios'
import './ImageUpload.css'

const ImageUpload = ({username}) => {

    const [url,setUrl] = useState("")
    const [Image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [caption, setCaption] = useState('')

    const handleChange = e => {
        if(e.target.files[0])
            setImage(e.target.files[0])
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on("state_changed", (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(progress)
        },
        (error) => {console.log(error)},
        () => {
            storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then((url) => {
                    setUrl(url)
                    axios.post('/upload', {
                        caption: caption,
                        user: username,
                        image: url
                    })
                    setProgress(0)
                    setCaption("")
                    setImage(null)
                })
        })
    }

    return (
        <div className="imageUpload">
            <progress 
                className="imageUpload__progress" 
                value={progress} 
                max="100" />
            <input
                type="text"
                placeholder="Enter a caption..."
                className="imageupload__input"
                value={caption}
                onChange={ e => setCaption(e.target.value)}
            />
            <input
                className="imageUpload__file"
                type="file"
                onChange={handleChange}
            />
            <button className="imageUpload__button"
                onClick={handleUpload}>Upload</button>
        </div>
    )
}

export default ImageUpload
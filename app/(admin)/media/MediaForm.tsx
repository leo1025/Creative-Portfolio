"use client";

import { useState } from "react";

export default function MediaForm() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // TODO: Add post success styling
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/s3upload", {
              method: "POST",
              body: formData,
            });
      
            const data = await response.json();
            console.log(data.status);
            setUploading(false);
          } catch (error) {
            console.log(error);
            setUploading(false);
          }
    }

    return (
        <div>
            <h1>Upload Media</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button type="submit" disabled={!file || uploading}>
                    {uploading ? "Uploading..." : "Upload"}
                </button>
            </form>
        </div>
    )
}
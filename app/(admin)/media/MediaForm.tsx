"use client";

import { useEffect, useState } from "react";

export default function MediaForm() {
    const [file, setFile] = useState(null);
    const [list, setList] = useState ([]);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDelete = async (fileName) => {
        const formData = new FormData();
        formData.append("fileName", fileName);

        try {
            const response = await fetch("/api/remove", {
                method: "DELETE",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                updateFileList();
            }
        } catch (error) {
            console.log(error);
        }        
    }

    const getFileList = async () => {
        const response = await fetch("/api/media", {
            method: "GET"
        });

        const result = await response.json();
        return result.fileList;
    }

    const updateFileList = async () => {
        const newList = await getFileList();
        setList(newList);
    }

    // TODO: Add post success styling
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/upload", {
              method: "POST",
              body: formData,
            });
      
            const data = await response.json();

            if(data.success) {
                updateFileList();
            }

            setUploading(false);
          } catch (error) {
            console.log(error);
            setUploading(false);
          }
    }

    useEffect(() => {
        updateFileList();
    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

    return (
        <div>
            <div>
                <h1>Upload Media</h1>
                <form onSubmit={handleSubmit}>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                    <button type="submit" disabled={!file || uploading}>
                        {uploading ? "Uploading..." : "Upload"}
                    </button>
                </form>
            </div>
            <div>
                <ul>
                    {list.map((file, index) => (
                        <li key={index}>
                            <a href={file[0]+file[1]}>{file[1]}</a>
                            <button onClick={() => handleDelete(file[1])}>DELETE</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
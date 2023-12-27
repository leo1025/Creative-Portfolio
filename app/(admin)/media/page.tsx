export default function Page() {
    return (
        <div className="container">
            <div className="content">
                <div>
                    <h1>Media Manager</h1>
                </div>
                <div>
                    <label>Upload</label>
                    <form action="">
                        <input type="file" id="files" name="files" multiple />
                        <input type="submit" />
                    </form>
                </div>
                <div>
                    <div>
                        <ul>
                            
                        </ul>
                    </div>
                </div>  
            </div>
        </div> 
    )
}
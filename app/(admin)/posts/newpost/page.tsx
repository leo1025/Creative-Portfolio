import Tiptap from './Tiptap'

export default function Page() {
    return (
        <div className="container">
            <div className="content">
                <form action="">
                    <div>
                        <label>Post Title</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Tags</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Feature Image</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Excerpt</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>TIP TAP EDITOR</label>
                        <Tiptap />
                    </div>
                </form>
            </div>
        </div>
    )
}
import PostEditor from '../../../../components/PostEditor'
import './newpost.css'

export default function Page() {
    return (
        <div className="container">
            <div className="content">
                <PostEditor />
            </div>
        </div>
    )
}
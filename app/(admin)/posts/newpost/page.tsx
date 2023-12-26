import Tiptap from './Tiptap'
import './newpost.css'

export default function Page() {
    return (
        <div className="container">
            <div className="content">
                <form action="">
                    <div className='topbar'>
                        <div className='p-10'>
                            <div className='float-left'>
                                <h1>New Post</h1>
                            </div>
                            <div className='float-right'>
                                <button className='btn ml-10'>Save</button>
                                <button className='btn ml-10'>Discard</button>
                            </div> 
                        </div>      
                    </div>
                    <div className='editor'>
                        <div className='w-75 float-left'>
                            <Tiptap />
                        </div>
                        <div className='w-25 float-right'>
                            <div className='option-row'>
                                <label>Title</label>
                                <input type="text" />
                            </div>
                            <div className='option-row'>
                                <label>Tags</label>
                                <input type="text" />
                            </div>
                            <div className='option-row'>
                                <label>Excerpt</label>
                                <input type="text" />
                            </div>
                            <div className='option-row'>
                                <label>Feature</label>
                                <input type="text" />
                            </div>
                            <div className='option-row'>
                                <img src="" alt="Featured Image" />
                            </div>
                        </div>
                    </div>                    
                </form>
            </div>
        </div>
    )
}
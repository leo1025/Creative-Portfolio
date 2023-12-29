import Link from 'next/link'
import './postbrowser.css'

export default function Page() {
    return <div className="container">
        <div className='content'>
            <div className='topbar'>
                <div className='p-10'>
                    <h1 className='float-left'>Post Browser</h1>
                    <Link className='btn float-right' href="/posts/newpost">New Post +</Link> 
                </div>        
            </div>
            <div className='browser'>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Created at</th>
                            <th>Updated at</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>

    </div>
}

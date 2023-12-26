import Link from 'next/link'
import './postbrowser.css'

interface BlogPost {
  id: number;
  title: string;
  dateCreated: string;
  dateUpdated: string;
  // Add any other fields you need for your blog posts
}

const blogPosts: BlogPost[] = [
  { id: 1, title: 'Sample Post 1', dateCreated: Date.now().toString(), dateUpdated: Date.now().toString() },
  { id: 2, title: 'Sample Post 2', dateCreated: Date.now().toString(), dateUpdated: Date.now().toString() },
  // Add more sample blog posts as needed
];

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
                        <th>Title</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                    </thead>
                    <tbody>
                        {blogPosts.map((post) => (
                            <tr>
                                <td>{post.title}</td>
                                <td>{post.dateCreated}</td>
                                <td>{post.dateUpdated}</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </div>
}

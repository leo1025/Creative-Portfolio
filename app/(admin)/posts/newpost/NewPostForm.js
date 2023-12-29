'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from 'next/link'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World!</p>',
  })

  return (
    <form action="">
        <div className='topbar'>
            <div className='p-10'>
                <div className='float-left'>
                    <h1>New Post</h1>
                </div>
                <div className='float-right'>
                    <button type='submit' className='btn ml-10'>Save</button>
                    <Link href="/posts" className='btn ml-10'>Cancel</Link>
                </div> 
            </div>      
        </div>
        <div className='editor'>
            <div className='w-75 float-left'>
              <EditorContent editor={editor} />
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
                    <label>Links</label>
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
  )
}

export default Tiptap
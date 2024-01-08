'use client'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'

import TiptapMenuBar from './TiptapMenuBar'

const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,    },
    orderedList: {
      keepMarks: true,
    },
  }),
  TextStyle.configure(),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure(),
  Image,
  Dropcursor,
]

const content = `
  <h2>
  Hi there,
  </h2>
  <p>this</p>
`

export default () => {

  const [featureImage, setFeatureImage] = useState('');

  return (
    <form>
      <div className='topbar'>
          <div className='p-10'>
              <div className='float-left'>
                  <h1>New Post</h1>
              </div>
              <div className='float-right'>
                  <button className='btn ml-10'>Publish</button>
              </div> 
          </div>      
      </div>
      <div className='editor'>
        <div className='w-75 float-left p-10'>
          <EditorProvider slotBefore={<TiptapMenuBar />} extensions={extensions} content={content} children={''}></EditorProvider>
        </div>
        <div className='w-25 p-10 float-right'>
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
                <input
                  type='text'
                  value={featureImage}
                  onChange={(e) => setFeatureImage(e.target.value)}
                >
                </input>
            </div>
            <div className='option-row'>
                <img src={featureImage} alt="Featured Image" />
            </div>
          </div>  
        </div>
    </form>
  )
}
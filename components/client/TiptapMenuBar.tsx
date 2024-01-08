'use client'

import { useCurrentEditor } from '@tiptap/react'
import React, { useEffect, useState } from 'react'


export default function MenuBar() { 
    const { editor } = useCurrentEditor()
  
    if (!editor) {
      return null
    }

    const addImage = () => {
      const url = window.prompt('URL')
  
      if (url) {
        editor.chain().focus().setImage({ src: url }).run()
      }
    }
  
    return (
      <div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
          type='button'
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
          type='button'
        >
          <em>I</em>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
          type='button'
        >
          <s>S</s>
        </button>
        <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''} type='button' >
          p
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} type='button' >
          h1
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''} type='button' >
          h2
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''} type='button' >
          h3
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''} type='button' >
          h4
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()} className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''} type='button' >
          h5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''} 
          type='button'
        >
          ul
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
          type='button'
        >
          ol
        </button>
        <button type='button' onClick={addImage}>img</button>
        <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive('codeBlock') ? 'is-active' : ''}
            type='button'
          >
            code
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
          type='button'
        >
          block
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()} type='button' >
          hr
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()} type='button' >
          br
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
          type='button'
        >
          undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
          type='button'
        >
          redo
        </button>
      </div>
    )
  }
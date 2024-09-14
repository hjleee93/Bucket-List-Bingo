'use client'

import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import { useEffect, useState } from 'react'
import TextAlign from '@tiptap/extension-text-align'

interface TiptapProps {
  sendEditor: (editor: Editor) => void;
  isClicked: boolean;
  onFocusChange: (hasFocus: boolean) => void;
}


const Tiptap = ({ isClicked, sendEditor, onFocusChange }: TiptapProps) => {

  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color, 
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        })
      ],
    onBlur: () => onFocusChange(false),
    onFocus: () => onFocusChange(true),
    immediatelyRender: true,

  })


  useEffect(() => {
    if (editor && isClicked) {
      sendEditor(editor);
    }
  }, [isClicked, editor, sendEditor]);

  return <EditorContent editor={editor} className="w-full h-full text-black overflow-hidden" />
}

export default Tiptap

'use client'

import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import { useEffect, useState } from 'react'

interface TiptapProps {
   
  sendEditor: (editor: Editor) => void;
  isClicked: boolean
}


const Tiptap = ({isClicked, sendEditor} : TiptapProps) => {
  const [curEditor, setEditor] = useState<any>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
 
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color],
    content: '',
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

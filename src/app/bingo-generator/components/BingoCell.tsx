'use client'
import { useState } from "react";
import { BubbleMenu, Editor, EditorContent, useEditor } from '@tiptap/react';
import FloatingMenu from "./textEditor/FloatingMenu";
import Tiptap from "./textEditor/Tiptap";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectBingoBoard, setBingoContent } from "@/lib/features/bingos/infoSlice";
import React from "react";



interface BingoCellProps {
  onClick: () => void;
  size: number;
  position?: string;
  isLastRow: boolean;
  isLastCol: boolean;
  isClicked: boolean;
}

export default function BingoCell({
  onClick,
  size,
  position,
  isLastRow,
  isLastCol,
  isClicked,
}: BingoCellProps) {
  const dispatch = useAppDispatch();

  const [editor, setEditor] = useState<Editor | null>(null);

  
  const getEditor = (editor: Editor) => {
    setEditor(editor);
  }

  const handleFocusChange = (hasFocus: boolean) => {
    if(!hasFocus){
      console.log('blur: ', position)
      console.log('isEmpty: ', editor?.isEmpty)
      if(editor?.isEmpty) return;
      console.log(editor?.getHTML()) 

      const row = Number(position?.split(',')[0])
      const col = Number(position?.split(',')[1])
      
      dispatch(setBingoContent({row, col, cell: { value: editor?.getHTML() || '' } }))
      
    }
  };
  
  return (
    <div
      onClick={onClick}
      className={`
        text-xl border-black
        ${isClicked ? 'outline outline-2 mt-[-1px] ml-[-1px] outline-main-active' : ''}
        ${isLastRow ? '' : 'border-b'} ${isLastCol ? '' : 'border-r'}
      `}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
    
     
      {isClicked && editor && (
        <div className="relative"
         >
          <FloatingMenu editor={editor} />
          <div style={{
            fontWeight: editor.isActive({ textAlign: 'center' }) ? 'bold' : 'normal',
          }}>
            </div>
       
        </div>
      )}

      <Tiptap isClicked={isClicked} sendEditor={getEditor} 
       onFocusChange={handleFocusChange}
      />
    </div>
  );
}

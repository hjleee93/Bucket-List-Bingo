'use client'
import { useState } from "react";
import { BubbleMenu, Editor, EditorContent, useEditor } from '@tiptap/react';
import FloatingMenu from "./textEditor/FloatingMenu";
import Tiptap from "./textEditor/Tiptap";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectBingoBoard, setBingoContent, setIsFilledStatus } from "@/lib/features/bingos/infoSlice";
import React from "react";



interface BingoCellProps {
  onClick: () => void;
  onBlurCell: () => void;
  size: number;
  position?: string;
  isLastRow: boolean;
  isLastCol: boolean;
  isClicked: boolean;
}

export default function BingoCell({
  onClick,
  onBlurCell,
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
    if (!hasFocus) {
      const [row, col] = position?.split(',').map(Number) || [];
      const value = editor?.isEmpty ? '' : editor?.getHTML() || '';
  
      console.log('blur: ', position);
      console.log('isEmpty: ', editor?.isEmpty);
      onBlurCell();
  
      dispatch(setBingoContent({ row, col, cell: { value } }));
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

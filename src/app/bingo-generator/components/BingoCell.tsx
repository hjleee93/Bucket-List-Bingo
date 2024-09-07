'use client'
import { useState } from "react";
import Tiptap from "./Tiptap";
import { BubbleMenu, Editor } from '@tiptap/react';

interface BingoCellProps {
  onClick: () => void;
  size: number;
  value?: number;
  isLastRow: boolean;
  isLastCol: boolean;
  isClicked: boolean;
  setCellStatus: (status: boolean) => void;
}

export default function BingoCell({
  onClick,
  size,
  value,
  isLastRow,
  isLastCol,
  isClicked,
  setCellStatus
}: BingoCellProps) {

  const [editor, setEditor] = useState<Editor | null>(null);

  const getEditor = (editor: Editor) => {
    setCellStatus(editor.isEmpty);
    setEditor(editor);
  }

  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-center text-xl border-black
        ${isClicked ? 'outline outline-2 mt-[-1px] ml-[-1px] outline-main-active' : ''}
        ${isLastRow ? '' : 'border-b'} ${isLastCol ? '' : 'border-r'}
      `}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
    
     
      {isClicked && editor && (
        <div className="relative mb-4" style={{ bottom: `${size}px` }}>
          <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <div className="bubble-menu">
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
              >
                Bold
              </button>
            </div>
            
          </BubbleMenu>
        </div>
      )}
      <Tiptap isClicked={isClicked} sendEditor={getEditor} />
    </div>
  );
}

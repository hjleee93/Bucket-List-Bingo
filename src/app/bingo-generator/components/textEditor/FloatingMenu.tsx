'use client'
import { Editor } from "@tiptap/react";
import { useState } from "react";

interface FloatingMenuProps {
  editor: Editor
}

type tiptapAlign = 'left' | 'center' | 'right' | 'justify';
export default function FloatingMenu({ editor }: FloatingMenuProps) {
  const [currentAlign, setCurrentAlign] = useState<tiptapAlign | null>('left');
  if (!editor) return null;

  const handleAlign = (align: tiptapAlign) => {
    editor.chain().focus().setTextAlign(align).run();
    setCurrentAlign(align);
  }


  return (
    <div className="absolute top-[-40px] bg-gray-300 flex flex-row space-x-sm">
      <button onClick={() => handleAlign('left')} >
        <span className='material-symbols-outlined'
          style={{ fontWeight: currentAlign === 'left' ? 'bold' : 'normal' }}
        >
          format_align_left
        </span>
      </button>
      <button
        onClick={() => handleAlign('center')}>
        <span className='material-symbols-outlined'
          style={{ fontWeight: currentAlign === 'center' ? 'bold' : 'normal' }}
        >
          format_align_center
        </span>
      </button>
      <button
        onClick={() => handleAlign('right')}>
        <span className='material-symbols-outlined'
          style={{ fontWeight: currentAlign === 'right' ? 'bold' : 'normal' }}
        >
          format_align_right
        </span>
      </button>
    </div>
  );
}
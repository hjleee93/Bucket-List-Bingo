'use client'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

interface BottomDialogProps {
  children: React.ReactNode;
  isOpen: boolean;
  sendIsOpen: (value: boolean) => void;
}

export default function BottomDialog({ children, isOpen, sendIsOpen }: BottomDialogProps) {
  console.log('bottom dialog ', children)
  return (
    <>
      <Dialog open={isOpen} onClose={() => { sendIsOpen(false) }} className="z-10 focus:outline-none overflow-y-auto">
        <DialogBackdrop transition className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0">
          <DialogPanel transition className="px-7 py-5 bg-white h-auto bottom-0 fixed w-screen rounded-tl-lg rounded-tr-lg">
            {children}
          </DialogPanel>
        </DialogBackdrop>
      </Dialog>
    </>
  )
}
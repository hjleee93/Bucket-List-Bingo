import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

interface CustomDialogProps {
  isOpen: boolean;
  children: React.ReactNode;
  sendIsOpen: (value: boolean) => void;
  onConfirm?: () => void;
}

export default function CustomDialog({isOpen, children, sendIsOpen, onConfirm}: CustomDialogProps) {
  return (
    <>
      <Dialog open={isOpen} onClose={() => { sendIsOpen(false) }} className="relative z-10 focus:outline-none">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex flex-col min-h-full items-center justify-center">
            <DialogPanel
              transition
              className="w-[320px] flex justify-center max-w-md rounded-xl bg-white/5 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="bg-white border w-full rounded-md">
                <div className='p-4 flex flex-col items-center justify-center'>
             {children}
             </div>
             <div className="flex flex-row h-[40px] border-t items-center">
             <div className='border-r w-[50%] flex items-center h-full justify-center' onClick={ onConfirm} >
              확인
             </div>
             <div className=' w-[50%] flex justify-center text-error'>
              취소
             </div>
             </div>
             </div>
             
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

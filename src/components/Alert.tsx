import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

interface CustomAlertProps {
  isOpen: boolean;
  children: React.ReactNode;
  sendIsOpen: (value: boolean) => void;
}

export default function CustomAlert({isOpen, children, sendIsOpen}: CustomAlertProps) {
  return (
    <>
      <Dialog open={isOpen} onClose={() => { sendIsOpen(false) }} 
      className="relative z-10 focus:outline-none">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex flex-col min-h-full items-center justify-center bg-dim/[0.75]">
            <DialogPanel
              transition
              className="w-[320px] flex justify-center max-w-md rounded-xl bg-white/5 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="bg-white border border-main-active w-full rounded-md">
                <div className='p-4 flex flex-col items-center justify-center min-h-[120px]'>
             {children}
             </div>
             <div className="flex flex-row h-[40px] border-t items-center border-main-active">
              <div className='w-full flex items-center h-full justify-center' onClick={ () => sendIsOpen(false) } >
                확인
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

import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from 'react-dom';

function Modal({ onClose, isOpen,children }) {
    return createPortal(
        <>
            {
                isOpen && (
                    <>
                        <div className='min-h-[200px] max-w-[80%]  bg-white p-4 z-50 relative m-auto'>
                            <div className='flex justify-end'>
                                <AiOutlineClose className='text-2xl cursor-pointer' onClick={onClose} /> 
                            </div>
                            {children}
                        </div>
                        
                        <div className='absolute top-0 z-40 h-screen w-screen backdrop-blur' onClick={onClose}/>

                    </>
                )}
        </>, document.getElementById('portal')
    )
}

export default Modal
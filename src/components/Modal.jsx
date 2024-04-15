import { createPortal } from "react-dom";
import { useState, useContext, useRef, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ModalContext } from "../context/modal-context";

export default function Modal({ children }) {
    const modalCtx = useContext(ModalContext);
    const modalRef = useRef()

    useEffect(() => {
        //open modal when modalOpen is true
        if (modalCtx.modal.modalOpen) {
            modalRef.current.showModal()
        } else {
            modalRef.current.close()
        }
    }, [modalCtx.modal.modalOpen])

    return createPortal(
        <dialog ref={modalRef} onClose={() => modalCtx.dispatchModal({ type: 'CLOSE' })} className="modal">
            {children}
        </dialog>
        ,
        document.getElementById('modal')
    )
}
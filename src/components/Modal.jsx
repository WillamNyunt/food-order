import { createPortal } from "react-dom";
import { useState, useContext } from "react";
import { Dialog } from "@headlessui/react";
import { ModalContext } from "../context/modal-context";

export default function Modal({children}) {
    const modalCtx = useContext(ModalContext);
    
    return createPortal(
        <Dialog open={modalCtx.modal.modalOpen} onClose={() => modalCtx.dispatchModal({type: 'CLOSE'})} className="modal">
            {children}
            <button onClick={() => modalCtx.dispatchModal({type: 'CLOSE'})}>Cancel</button>
        </Dialog>,
        document.getElementById('modal')
    )
}
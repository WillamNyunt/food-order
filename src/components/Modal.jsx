import { createPortal } from "react-dom";
import { useState, useContext } from "react";
import { Dialog } from "@headlessui/react";
import { ModalContext } from "../context/modal-context";

export default function Modal({children}) {
    const modalCtx = useContext(ModalContext);
    return createPortal(
        <Dialog open={modalCtx.modalOpen} onClose={modalCtx.setModalOpen} className="modal">
            {children}
            <button onClick={modalCtx.setModalClose}>Cancel</button>
        </Dialog>,
        document.getElementById('modal')
    )
}
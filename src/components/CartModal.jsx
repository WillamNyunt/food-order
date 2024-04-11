import React, {useContext} from 'react'
import Modal from './Modal'
import Cart from './Cart'
import { ModalContext } from '../context/modal-context'

export default function CartModal() {
    const modalCtx = useContext(ModalContext);

    return (
        <Modal>
            {modalCtx.modal.modalOpen && modalCtx.modal.modalType === 'Cart' && <Cart/>}
        </Modal>
    )
}

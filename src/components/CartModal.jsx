import React, {useContext} from 'react'
import Modal from './Modal'
import Cart from './Cart'
import { ModalContext } from '../context/modal-context'
import Checkout from './Checkout'

export default function CartModal() {
    const modalCtx = useContext(ModalContext);

    return (
        <Modal>
            {modalCtx.modal.modalOpen && modalCtx.modal.modalType === 'CART' && <Cart/>}
            {modalCtx.modal.modalOpen && modalCtx.modal.modalType === 'CHECKOUT' && <Checkout/>}
        </Modal>
    )
}

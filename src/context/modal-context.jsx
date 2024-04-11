import { createContext, useContext, useState } from 'react';

const ModalContextDefaultValues = {
    modalOpen: false,
    modalType: '',
    setModalOpen: () => {},
    setModalClose: () => {}
};

export const ModalContext = createContext(ModalContextDefaultValues);

export const ModalProvider = ({children}) => {
    const [modal, setModal] = useState({
        modalOpen: false,
        modalType: ''
    });

    const setModalClose = () => {
        setModal(prevModal => {
            return {
                ...prevModal,
                modalOpen: false
            };
        });
    };

    const setModalOpen = (type) => {
        setModal(prevModal => {
            return {
                ...prevModal,
                modalOpen: true,
                modalType: type
            };
        });
    };

    const setModalType = (type) => {
        setModalType(prevModal => {
            return {
                ...prevModal,
                modalType: type
            };
        });
    }

    const modalContextProviderValues = {
        modal: modal,
        setModalOpen,
        setModalClose
    };

    return (
        <ModalContext.Provider value={modalContextProviderValues}>
            {children}
        </ModalContext.Provider>
    )
}
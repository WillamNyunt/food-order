import { createContext, useContext, useState } from 'react';

const ModalContextDefaultValues = {
    modalOpen: false,
    setModalOpen: () => {},
    setModalClose: () => {}
};

export const ModalContext = createContext(ModalContextDefaultValues);

export const ModalProvider = ({children}) => {
    const [modal, setModal] = useState(false);

    const setModalClose = () => {
        setModal(false);
    };

    const setModalOpen = () => {
        setModal(true);
    };

    const modalContextProviderValues = {
        modalOpen: modal,
        setModalOpen,
        setModalClose
    };

    return (
        <ModalContext.Provider value={modalContextProviderValues}>
            {children}
        </ModalContext.Provider>
    )
}
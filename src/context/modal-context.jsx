import { createContext, useState, useReducer, useCallback } from 'react';

const ModalContextDefaultValues = {
    modalOpen: false,
    modalType: '',
    setModalOpen: () => {},
    setModalClose: () => {}
};

export const ModalContext = createContext(ModalContextDefaultValues);

export const ModalProvider = ({children}) => {
    const [modal, dispatchModal] = useReducer(modalReducer, {
        modalOpen: false,
        modalType: ''
    });

    function modalReducer(state, action) {
        const {type, payload} = action;
        if (type === 'OPEN') {
            return {
                ...state,
                modalType: payload,
                modalOpen: true
            };
        } else if (type === 'CLOSE') {
            return {
                ...state,
                modalOpen: false
            };
        } else if (type === 'SET_TYPE') {
            return {
                ...state,
                modalType: payload
            };
        }
    }

    const modalContextProviderValues = {
        modal: modal,
        dispatchModal,
    };

    return (
        <ModalContext.Provider value={modalContextProviderValues}>
            {children}
        </ModalContext.Provider>
    )
}
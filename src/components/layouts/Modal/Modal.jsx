import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import close from '/icons/close.png'
const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Cleanup function to remove the class when the modal is closed
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);


    if (!isOpen) return null;

    return (
        <div className={styles.modal_overlay} onClick={onClose}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                <img className={styles.modal_close} src={close} alt="" width={48} onClick={onClose} />
                {children}
            </div>
        </div>
    );
};

export default Modal;

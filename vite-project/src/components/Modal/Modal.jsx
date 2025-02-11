import React from "react";
import "./Modal.scss";

const Modal = ({ onClose, children }) => {
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains("modal")) {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleOutsideClick}>
            <div className="modal-content">
                {children}
                <button className="btn-close" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
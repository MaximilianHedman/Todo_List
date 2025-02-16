import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Modal.scss";

const Modal = ({ onClose, children, onConfirm }) => {
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains("modal")) {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleOutsideClick}>
            <div className="modal-content">
                {children}
                <div className="modal-actions">
                    {onConfirm && (
                        <button className="btn btn-confirm" onClick={onConfirm}>
                            Confirm <FontAwesomeIcon icon={["fas", "check-circle"]} />
                        </button>
                    )}
                    <button className="btn btn-close" onClick={onClose}>
                        Cancel <FontAwesomeIcon icon={["fas", "cancel"]} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
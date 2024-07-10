import React, {useEffect, useRef} from "react";

const modal = {
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)"
};

const close = {
    position: "absolute",
    top: 15,
    right: 35,
    color: "#f1f1f1",
    fontSize: 40,
    fontWeight: "bold",
    cursor: "pointer"
};

const modalContent = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: "100%",
    margin: "auto"
};

export const Modal = ({ onOpen, children }) => {
    return <div onClick={onOpen}> {children}</div>;
};

export const ModalContent = ({modalRef, isVisible ,setVisible, children }) => {


    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setVisible(false);
        }
    };

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside, isVisible]);

    return (
        <div style={modal} >
            <div style={modalContent}>
                {children}
            </div>
        </div>
    );
};

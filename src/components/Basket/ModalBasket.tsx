import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (location.pathname === "/total") {
      onClose();
    }
  }, [location.pathname, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <div
        className="container block__right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ModalContent">
          {children}
          <div className="under__block">
            <Link className="link__to" to="/total">
              Перейти в корзину
            </Link>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.323);
  z-index: 1000;

  .block__right {
    display: flex;
    justify-content: right;
  }

  .ModalContent {
    background: white;
    padding: 20px;
    width: 400px;
    margin-top: 50px;
    position: relative;
    color: black;
    max-height: 80vh;
    overflow-y: auto;
  }

  .link__to {
    background-color: var(--btn-lgt);
    color: white;
    padding: 20px 40px;
    border-radius: 4px;
  }

  .under__block {
    color: black;
    display: flex;
    justify-content: space-between;
  }
`;

export default Modal;

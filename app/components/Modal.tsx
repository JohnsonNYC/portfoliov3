import React, {useEffect} from 'react'
import ReactPortal from './Portal'
import styled from 'styled-components'

interface ModalProps { 
  isOpen: boolean; 
  onClose: () => void;
  children: React.ReactNode;
  wrapperId: string; 
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children, wrapperId}) => {
  if(!isOpen) return null; 

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ( 
  <ReactPortal wrapperId={wrapperId}>
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={onClose} >&times;</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  </ReactPortal> );
}

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContainer = styled.div`
  background: var(--phthalo-green);
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 70vw; 
`

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
`
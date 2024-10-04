import React, {useEffect} from 'react'
import ReactPortal from './Portal'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useMediaPredicate } from '../utils/hooks';

interface ModalProps { 
  isOpen: boolean; 
  onClose: () => void;
  children: React.ReactNode;
  wrapperId: string; 
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children, wrapperId}) => {
    const isMobile: boolean = useMediaPredicate("(max-width: 450px)");

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

  if(!isOpen) return null; 

  return ( 
  <ReactPortal wrapperId={wrapperId}>
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer initial={isMobile? {y: '100%'}:{x: '100%'}} animate={isMobile? {y: '0%'}:{x: '0%'}} transition={{ease: 'linear'}}>
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

  @media screen and (max-width: 400px){
    align-items: end;
  }
`

const ModalContainer = styled(motion.div)`
  background: var(--phthalo-green);
  padding: 20px;
  border-radius: 8px;
  width: 70vw; 

  min-height: 88vh;
  height: 88vh;
  position: relative;
  margin: auto 0 auto auto;

  @media screen and (max-width: 400px){
    width: 100vw;
    max-height: 90vh;
    margin: auto 0 0 0 ;
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background: transparent;
  font-size: 40px;
  cursor: pointer;
  z-index: 100; 
`
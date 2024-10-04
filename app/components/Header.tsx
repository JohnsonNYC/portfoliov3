
import React,{useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {useMediaPredicate} from "../utils/hooks"
import { Menu, X } from "lucide-react";
import { scrollToComponent } from "../utils/service";

const hoverStyle = {scale: 1.4, color: "var(--sage)"};

const Header = () => {
  const isMobile: boolean = useMediaPredicate("(max-width: 450px)");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  
  const prevScrollPosref = useRef(0); 

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingUp = prevScrollPosref.current > currentScrollPos; 

    setShowHeader(isScrollingUp || currentScrollPos <= 0);
    prevScrollPosref.current = currentScrollPos; 
  }

  useEffect(() => {
    if(!isMobile){
      setShowDropdown(false);
    }
  }, [isMobile])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[prevScrollPosref])
  
  return (
    <HeaderContainer initial={{y:'-100%', opacity: 0}} animate={{y: showHeader? 0: '-100%', opacity: showHeader? 1: 0}} transition={{type:'spring', stiffness: 100, damping: 20, duration: 1}} >
        <Container>
          <MotionDiv whileHover={{color: "var(--sage)"}}>The Johnson Kow</MotionDiv>
          <NavigationLinks isMobile={isMobile} showDropdown={showDropdown} setShowDropdown={setShowDropdown} handleScroll={scrollToComponent}/>
        </Container>
        <MobileDropdownMenu showDropdown={showDropdown} setShowDropdown={setShowDropdown} handleScroll={scrollToComponent}/>
    </HeaderContainer>
  )
}

interface NavigationLinksProps {
  isMobile: boolean;
  showDropdown: boolean;
  setShowDropdown: (value: boolean | ((prevState: boolean) => boolean)) => void;
  handleScroll: (id:string) => void; 
}

const NavigationLinks = ({isMobile, showDropdown,setShowDropdown, handleScroll}:NavigationLinksProps) => {
  return (
    <NavContainer>
      {isMobile ? (
        <MenuIcon showDropdown={showDropdown} onClick={() => setShowDropdown(prevState => !prevState)} />
      ) : (
        <Links handleScroll={handleScroll}/>
      )}
    </NavContainer>
  )
}

// Menu Icon component
const MenuIcon = ({ showDropdown, onClick }: { showDropdown: boolean; onClick: () => void }) => {
  return (
    <motion.div onClick={onClick}>
      {showDropdown ? (
        <motion.div key="x-icon" initial={{ rotate: 90 }} animate={{ rotate: 0 }}>
          <X />
        </motion.div>
      ) : ( 
        <motion.div key="menu-icon" initial={{ rotate: -90 }} animate={{ rotate: 0 }}>
          <Menu />
        </motion.div>
      )}
    </motion.div>
  );
};

interface MobileDropdownMenuProps  {
  showDropdown: boolean; 
  setShowDropdown: (value: boolean | ((prevState:boolean) => boolean)) => void;
  handleScroll: (id:string) => void; 
}

const MobileDropdownMenu = ({showDropdown, setShowDropdown, handleScroll}: MobileDropdownMenuProps) => {
  return (
    <motion.div initial={{height: 0}} animate={{height: showDropdown? 'auto': '0'}} transition={{duration: 0.2, ease: "easeInOut"}} style={{overflow: 'hidden'}}>
      <DropdownContainer>
        <Links handleScroll={handleScroll} setShowDropdown={setShowDropdown}/>
      </DropdownContainer>
    </motion.div>
      )
}
interface LinksProp {
  handleScroll: (id: string, offset?:number) => void;
  setShowDropdown?: (value: boolean | ((prevState:boolean) => boolean)) => void;
}

const Links = ({handleScroll, setShowDropdown}: LinksProp) => {

  const isMobile: boolean = useMediaPredicate("(max-width: 450px)");

  const handleClick = (id: string, offset: number): void => {
    handleScroll(id, offset);

    setTimeout(() => {
      if(isMobile && setShowDropdown)setShowDropdown(false);
    }, 500)
  }

  return (
    <>
        <MotionDiv whileHover={hoverStyle} onClick={() => handleClick('experience', 0)}>
          Work
        </MotionDiv>
        <MotionDiv whileHover={hoverStyle} onClick={() => handleClick('contact', 0 )}>
          Contact
        </MotionDiv>
        <MotionDiv whileHover={hoverStyle} onClick={() => handleClick('about', 0)}>
          About
        </MotionDiv>
        <MotionLink whileHover={hoverStyle} target="_blank" href={"/Resume.pdf"} rel="noopener noreferrer">
          Resume
        </MotionLink>
    </>
  )
}

export default Header;

const HeaderContainer = styled(motion.header)`
  width: 100%; 
  height: auto; 
  position: fixed; 
  top: 0; 

  background:#0a0a0a;
  z-index: 1000;
`
const Container = styled.div`
  display: flex; 
  justify-content: space-between;
  border-bottom: 1px solid var(--brunswick); 

  & > div { 
    width: 50%; 
    padding: 1rem; 
  }
`
const NavContainer = styled.div`
  display: flex; 
  justify-content: space-between; 

  & > div {
    margin: 0 0.2rem;
    cursor:pointer; 
  }

  svg { 
    stroke: var(--brunswick);
  }
  @media screen and (max-width: 450px){
    justify-content: end; 
  }
`
const DropdownContainer = styled.div`
  background: var(--brunswick);

  & > * {
    width: 100%; 
    display: block;
    padding: 1rem;
    color: var(--timberwolf);
  }
`
const MotionDiv = styled(motion.div)`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 600;
`
const MotionLink = styled(motion.a)`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 600;
`
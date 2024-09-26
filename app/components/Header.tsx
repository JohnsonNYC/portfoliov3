
import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {useMediaPredicate} from "../utils/hooks"
import { Menu, X } from "lucide-react";
import { scrollToComponent } from "../utils/service";

const Header = () => {
  const isMobile: boolean = useMediaPredicate("(max-width: 450px)");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    if(!isMobile){
      setShowDropdown(false);
    }
  }, [isMobile])
  
  return (
    <motion.header initial={{y:'-100%', opacity: 0}} animate={{y:0, opacity: 1}} transition={{type:'spring', stiffness: 100, damping: 20, duration: 1, delay: 1.6}} style={{height: '60px'}}>
      <Wrapper>
        <Container>
          <div>My Portfolio</div>
          <NavigationLinks isMobile={isMobile} showDropdown={showDropdown} setShowDropdown={setShowDropdown} handleScroll={scrollToComponent}/>
        </Container>
        <MobileDropdownMenu showDropdown={showDropdown} setShowDropdown={setShowDropdown} handleScroll={scrollToComponent}/>
      </Wrapper>
    </motion.header>
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
    <motion.div initial={{height: 0}} animate={{height: showDropdown? 'auto': '0'}} transition={{duration: 0.4, ease: "easeInOut"}} style={{overflow: 'hidden'}}>
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
  const hoverStyle = {scale: 1.4, color: "var(--sage)"};
  const isMobile: boolean = useMediaPredicate("(max-width: 450px)");

  const handleClick = (id: string, offset: number): void => {
    handleScroll(id, offset);

    setTimeout(() => {
      if(isMobile && setShowDropdown)setShowDropdown(false);
    }, 500)
  }

  return (
    <>
        <MotionDiv whileHover={hoverStyle} onClick={() => handleClick('experience', 51)}>
          Work
        </MotionDiv>
        <MotionDiv whileHover={hoverStyle} onClick={() => handleClick('contact', 51)}>
          Contact
        </MotionDiv>
        <MotionDiv whileHover={hoverStyle} onClick={() => handleClick('about', 51)}>
          About
        </MotionDiv>
        <MotionLink whileHover={hoverStyle} target="_blank" href={"/Resume.pdf"} rel="noopener noreferrer">
          Resume
        </MotionLink>
    </>
  )
}

export default Header;

const Container = styled.div`
  display: flex; 
  justify-content: space-between;
  border-bottom: 1px solid var(--brunswick); 

  & > div { 
    width: 50%; 
    padding: 1rem; 
  }
`
const Wrapper = styled.div`
  width: 100%; 
  height: auto; 
  position: fixed; 
  top: 0; 

  background:#0a0a0a;
  z-index: 1000;
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
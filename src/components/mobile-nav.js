import React, {useState} from "react"
import {Link} from "gatsby"
import {Menu, X} from "react-feather"
import styled from "styled-components"

const Nav = styled.nav`
    display: none;
    width: 60vw;
    height: 100%;
    position: fixed;
    right: 0;
    top:0;
    background-color: white;
    z-index: 100;

    ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        font-size: 1.5rem;
    }
    li{
        padding: 1rem 0 1rem 0;
    }
    a{
        text-decoration: none;
        color: black;
    }
`;

const Wrapper = styled.div`
    display:none;
    @media only screen and (max-width: 450px){
        display: block;
    }
    .open{
        display: block;
    }
`

const Button = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index:200;
    border:none;
    background: transparent;
    display: none;
    margin: 1.5rem 1rem 0 0;
  @media only screen and (max-width: 450px){
    display: block;
  }
`;

const MobileNav = () =>{
    const [open, setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(!open)
    };
    
    return(
        <Wrapper>
            <Nav className={open ? 'open' : ''}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </Nav>
            <Button onClick={handleOpen}>
                {open ? <X/> : <Menu/>}
            </Button>
        </Wrapper>
    )
}
export default MobileNav;
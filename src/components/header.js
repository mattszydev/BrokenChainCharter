import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import {Anchor} from "react-feather"
import {Link} from "gatsby"
import MobileNav from "./mobile-nav"

const HeaderContainer = styled.header`
  position: absolute;
  z-index: 200;
  top: 0;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-items: center;
  @media only screen and (max-width: 450px){
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media only screen and (max-width: 450px){
    margin-left: 1rem;
  }
`;
  
const Nav = styled.nav`
  max-width: 700px;
  @media only screen and (max-width: 450px){
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
`;

const MyLink = styled(Link)`
  color: black;
  font-size: 1rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  text-decoration: none;
  :hover{
    cursor: pointer;
    background-color: rgb(17, 45, 89);
    color:  white;
    border-radius: 10px;
    }
`;


const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Logo>
      <Anchor />
      <h2>Broken Chain Charters</h2>
    </Logo>
    <Nav>
      <List>
        <li>
          <MyLink to="/">Home</MyLink>
        </li>
        <li>
          <MyLink to="/">About</MyLink>
        </li>
        <li>
          <MyLink to="/">Services</MyLink>
        </li>
        <li>
          <MyLink to="/">Contact</MyLink>
        </li>
      </List>
    </Nav>
    <MobileNav/>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

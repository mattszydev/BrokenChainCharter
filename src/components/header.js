import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import {Anchor} from "react-feather"
import {Link} from "gatsby"

const HeaderContainer = styled.header`
  position: absolute;
  z-index: 200;
  top: 0;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: auto auto;
  align-items: baseline;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-items: center;
`;

const Logo = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
  
const Title = styled.h2`

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

const Item = styled.li`

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
      <Title>Broken Chain Charters</Title>
    </Logo>
    <Nav>
      <List>
        <Item>
          <MyLink to="/">Home</MyLink>
        </Item>
        <Item>
          <MyLink to="/">About Us</MyLink>
        </Item>
        <Item>
          <MyLink to="/">Services</MyLink>
        </Item>
        <Item>
          <MyLink to="/">Contact</MyLink>
        </Item>
      </List>
    </Nav>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

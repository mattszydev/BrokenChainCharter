import React from "react"
import styled from "styled-components"
import {Phone, Mail, Home, Facebook, Instagram, Twitter, Youtube} from "react-feather"

const FooterContainer = styled.footer`
    width: 100%;
`;

const BottomBar = styled.div`
    display:  flex;
    flex-direction: row;
    background-color: rgb(17, 45, 89);
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    justify-content: center;
    color: white;

    @media only screen and (max-width: 450px){
        flex-direction: column;
        align-items: center;
    }

    .center{
        border-right: 2px solid white;
        border-left: 2px solid white;
        padding: 0 2rem 0 2rem;
        margin: 0 2rem 0 2rem;

        @media only screen and (max-width: 450px){
            padding: 2rem 0 2rem 0;
            margin: 2rem 0 2rem 0;
            border-right: none;
            border-left: none;
            border-top: 2px solid white;
            border-bottom: 2px solid white;
            text-align: left;
        }
    }

    h3{
        padding-bottom: 1rem;
        padding-left: 1rem;
    }

    p{
        font-size: .9rem;
    }
`;

const BarItem = styled.div`
    font-size: 1.5rem;
    text-align: left;
`;

const TitleWrap = styled.div`
    display: flex;
    flex-direction: row;
`;

const LowerFoot = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 7rem 0 7rem 0;
    @media only screen and (max-width: 450px){
        flex-direction: column;
        align-items: center;
    }
`;

const Card = styled.div`
    max-width: 300px;
    @media only screen and (max-width: 450px){
        text-align: center;
        width: 100%;
        margin-bottom: 3rem;
    }
    h4{
        font-size: 1.5rem;
        padding-bottom: 3rem;
    }
    ul{
        list-style-type: '-';
    }
    li{
        padding-bottom: .5rem;
    }
    address{
        display: flex;
        flex-direction: column;
    }
`
const LinksList = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 1rem;

    @media only screen and (max-width: 450px){
        width: 100%;
        justify-content: center;
    }

    a {
        color:black;
        padding: .5rem;
        :hover{
            cursor: pointer;
            background-color: rgb(17, 45, 89);
            color:  white;
            border-radius: 10px;
        }
    }
`;

const Footer = () => (
    <FooterContainer>
        <BottomBar>
            <BarItem>
                <TitleWrap>
                    <Phone />
                    <h3>Call Us</h3>
                </TitleWrap>
                <p>123-456-7890</p>
            </BarItem>
            <BarItem className="center">
                <TitleWrap>
                    <Mail />
                    <h3>Email Us</h3>
                </TitleWrap>
                <p>example@charter.com</p>
            </BarItem>
            <BarItem>
                <TitleWrap>
                    <Home />
                    <h3>Hours</h3>
                </TitleWrap>
                <p>9-5 Monday-Friday</p>
            </BarItem>
        </BottomBar>
        <LowerFoot>
            <Card>
                <h4>Over 20 years experience</h4>
                <p>Over 10 awards for teaching excellence</p>
                <LinksList>
                    <a href="#">
                        <Facebook/>
                    </a>
                    <a href="#">
                        <Instagram/>
                    </a>
                    <a href="#">
                        <Twitter/>
                    </a>
                    <a href="#">
                        <Youtube/>
                    </a>
                </LinksList>
            </Card>
            <Card>
                <h4>Services</h4>
                <ul>
                    <li>Courses</li>
                    <li>Charters</li>
                    <li>Rentals</li>
                    <li>Competitions</li>
                    <li>Events</li>
                </ul>
            </Card>
            <Card>
                <h4>Visit Us</h4>
                <address>
                    <span>123 North beach St</span>
                    <span>San Francisco, CA</span>
                </address>
            </Card>
        </LowerFoot>
    </FooterContainer>
)

export default Footer;
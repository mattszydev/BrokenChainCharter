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
    font-family: Arial, Helvetica, sans-serif;
    @media only screen and (max-width: 450px){
        flex-direction: column;
        align-items: center;
    }
`;

const BarItem = styled.div`
    font-size: 1.5rem;
    text-align: left;
`;

const CenterBarItem = styled.div`
    font-size: 1.5rem;
    color: white;
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
`;

const BarTitle = styled.h3`
    padding-bottom: 1rem;
    padding-left: 1rem;
`

const TitleWrap = styled.div`
    display: flex;
    flex-direction: row;
`;

const BarParagraph = styled.p`
    font-size: .9rem;
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
`
const CenterCard = styled.div`
    max-width: 300px;
    @media only screen and (max-width: 450px){
        text-align: center;
        width: 100%;
        margin-bottom: 3rem;
    }
    
`

const CardTitle = styled.h4`
    font-size: 1.5rem;
    padding-bottom: 3rem;
`;

const Paragraph = styled.p``;

const List = styled.ul`
    list-style-type: '-';
`;

const Item = styled.li`
    padding-bottom: .5rem;
`;

const Address = styled.address`
    display: flex;
    flex-direction: column;
`;

const LinksList = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
    @media only screen and (max-width: 450px){
        width: 100%;
        justify-content: center;
    }
`;

const ExtLink = styled.a`
    padding: .5rem;
    :hover{
        cursor: pointer;
        background-color: rgb(17, 45, 89);
        color:  white;
        border-radius: 10px;
    }
`;

const Footer = () => (
    <FooterContainer>
        <BottomBar>
            <BarItem>
                <TitleWrap>
                    <Phone />
                    <BarTitle>Call Us</BarTitle>
                </TitleWrap>
                <BarParagraph>123-456-7890</BarParagraph>
            </BarItem>
            <CenterBarItem>
                <TitleWrap>
                    <Mail />
                    <BarTitle>Email Us</BarTitle>
                </TitleWrap>
                <BarParagraph>example@charter.com</BarParagraph>
            </CenterBarItem>
            <BarItem>
                <TitleWrap>
                    <Home />
                    <BarTitle>Hours</BarTitle>
                </TitleWrap>
                <BarParagraph>9-5 Monday-Friday</BarParagraph>
            </BarItem>
        </BottomBar>
        <LowerFoot>
            <Card>
                <CardTitle>Over 20 years experience</CardTitle>
                <Paragraph>Over 10 awards for teaching excelence</Paragraph>
                <LinksList>
                    <ExtLink>
                        <Facebook/>
                    </ExtLink>
                    <ExtLink>
                        <Instagram/>
                    </ExtLink>
                    <ExtLink>
                        <Twitter/>
                    </ExtLink>
                    <ExtLink>
                        <Youtube/>
                    </ExtLink>
                </LinksList>
            </Card>
            <CenterCard>
                <CardTitle>Services</CardTitle>
                <List>
                    <Item>Courses</Item>
                    <Item>Charters</Item>
                    <Item>Rentals</Item>
                    <Item>Competitions</Item>
                    <Item>Events</Item>
                </List>
            </CenterCard>
            <Card>
                <CardTitle>Visit Us</CardTitle>
                <Address>
                    <span>123 North beach St</span>
                    <span>San Francisco, CA</span>
                </Address>
            </Card>
        </LowerFoot>
    </FooterContainer>
)

export default Footer;
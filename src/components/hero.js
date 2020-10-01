import React from "react"
import styled from "styled-components"
import image from "../images/sailboat-medium.jpg"

const HeroContainer = styled.section`
    min-height: 100vh;
    width: 100%;
    z-index: 100;
`;

const ContentWrapper = styled.div`
    padding-top: 15rem;
    padding-left: 7rem;
    max-width: 800px;
    @media only screen and (max-width: 600px){
        padding: 10rem 1rem 0 1rem;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 85vh;
    background-image: url(${image});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    @media only screen and (max-width: 600px){
        background-position: 90% 50%;
    }
`;


const BottomBar = styled.div`
    display: flex;
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
    @media only screen and(max-width: 450px){
        text-align: left;
    }
`;

const CenterBarItem = styled.div`
    font-size: 1.5rem;
    color: white;
    border-right: 2px solid white;
    padding: 0 2rem 0 2rem;
    margin: 0 2rem 0 2rem;
    
    border-left: 2px solid white;
    border-right: 2px solid white;
    
    @media only screen and (max-width: 450px){
        border-right: none;
        border-left: none;
        padding: 2rem 0 2rem 0;
        margin:  2rem 0 2rem 0;

        border-top: 2px solid white;
        border-bottom: 2px solid white;
        
    }
`;

const BarTitle = styled.h3`
    padding-bottom: 1rem;
`

const BarParagraph = styled.p`
    font-size: .9rem;
`;

const Title = styled.h1`
    font-size: 3rem;
    padding-bottom: 4rem;
    color:  white;
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    color:  white;
`;

const Hero = () => (
    <HeroContainer>
        <Wrapper>
            <ContentWrapper>
                <Title>Broken Chain Charters</Title>
                <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe eius ipsum a quidem, aperiam nam consectetur explicabo qui atque incidunt quam, modi, eum delectus? Nobis magni officia perspiciatis accusamus.</Paragraph>
            </ContentWrapper>
        </Wrapper>
        <BottomBar>
            <BarItem>
                <BarTitle>Courses</BarTitle>
                <BarParagraph>ASA certified classes for all skill levels</BarParagraph>
            </BarItem>
            <CenterBarItem>
                <BarTitle>Charter</BarTitle>
                <BarParagraph>Book a day sailing experience with your friends</BarParagraph>
            </CenterBarItem>
            <BarItem>
                <BarTitle>Rental</BarTitle>
                <BarParagraph>Rent a boat from our fleet to sail on your own</BarParagraph>
            </BarItem>
        </BottomBar>
    </HeroContainer>
)

export default Hero;
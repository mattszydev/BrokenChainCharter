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
    height: 100%;
    color:white;
    
    @media only screen and (max-width: 600px){
        padding: 10rem 1rem 0 1rem;
        text-align: center;
    }

    h1{
        font-size: 3rem;
        padding-bottom: 4rem;
    }

    p{
        font-size: 1.5rem;
    }
`;

const HeroImage = styled.div`
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

const OverLay = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.2);
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

    .center{
        font-size: 1.5rem;
        border-right: 2px solid white;
        border-left: 2px solid white;
        padding: 0 2rem 0 2rem;
        margin: 0 2rem 0 2rem;

        @media only screen and (max-width: 450px){
            border-right: none;
            border-left: none;
            border-top: 2px solid white;
            border-bottom: 2px solid white;
            padding: 2rem 0 2rem 0;
            margin:  2rem 0 2rem 0;
        }
    }

    @media only screen and (max-width: 450px){
        flex-direction: column;
        align-items: center;
    }
`;

const BarItem = styled.div`
    font-size: 1.5rem;

    h3{
        padding-bottom: 1rem;
    }

    p{
        font-size: .9rem;
    }
`;

const Hero = () => (
    <HeroContainer>
        <HeroImage>
            <OverLay>
                <ContentWrapper>
                    <h1>Broken Chain Charters</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe eius ipsum a quidem, aperiam nam consectetur explicabo qui atque incidunt quam, modi, eum delectus? Nobis magni officia perspiciatis accusamus.</p>
                </ContentWrapper>
            </OverLay>
        </HeroImage>
        <BottomBar>
            <BarItem>
                <h3>Courses</h3>
                <p>ASA certified classes for all skill levels</p>
            </BarItem>
            <BarItem className="center">
                <h3>Charter</h3>
                <p>Book a day sailing experience with your friends</p>
            </BarItem>
            <BarItem>
                <h3>Rental</h3>
                <p>Rent a boat from our fleet to sail on your own</p>
            </BarItem>
        </BottomBar>
    </HeroContainer>
)

export default Hero;
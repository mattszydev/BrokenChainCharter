import React from "react"
import styled from "styled-components"
import {MapPin, Award, Compass} from "react-feather"

const Container = styled.section`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    text-align: center;
    padding-top: 7rem;
    padding-bottom: 7rem;
    background-color: rgb(230, 230, 230);
`;

const MainWrapper = styled.div`
    max-width: 800px;
    padding-bottom: 5rem;
    margin: auto;

    h2{
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }

    p{
        font-size: 1.4rem;
        line-height: 1.3rem;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media only screen and (max-width: 450px){
        flex-direction: column;
        align-items: center;
    }
`;

const Card = styled.div`
    text-align: center;
    max-width: 300px;
    @media only screen and (max-width: 450px){
        margin-bottom: 4rem;
    }

    h3{
        font-size: 1.6rem;
        padding: 2rem 0 2rem 0;
    }

    p{
        font-size: 1.2rem;
        line-height: 1.3rem;
    }
`;

const BreakDown = () => (
    <Container>
        <MainWrapper>
            <h2>Best lessons available anywhere</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe eius ipsum a quidem, aperiam nam consectetur explicabo qui atque incidunt quam, modi, eum delectus?</p>
        </MainWrapper>
        
        <CardWrapper>
            <Card>
                <MapPin style={{color:`rgb(232, 58, 58)`}} size={50} />
                <h3>Multiple location to choose from</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe eius ipsum a quidem.</p>
            </Card>
            <Card>
                <Award style={{color:`rgb(232, 58, 58)`}} size={50}/>
                <h3>Staff of ASA certified instructors</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe eius ipsum a quidem.</p>
            </Card>
            <Card>
                <Compass style={{color:`rgb(232, 58, 58)`}} size={50} />
                <h3>Helping you find a new life passion</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe eius ipsum a quidem.</p>
            </Card>
        </CardWrapper>

    </Container>
);

export default BreakDown;
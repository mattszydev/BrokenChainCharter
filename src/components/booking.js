import React from "react"
import styled from "styled-components"
import source from "../images/sailboat2-small.jpg"
import {Link} from "gatsby"

const Container = styled.section`
    width: 100%;
    padding: 7rem 0 7rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
`;

const TextWrap = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    max-width: 400px;
    margin-right: 5rem;
    @media only screen and (max-width: 450px){
        margin: 0 1rem 2rem 1rem;
        width: 100%;
        text-align: left;
    }

    h2{
        padding-bottom: 2rem;
        font-size: 2.5rem;
    }

    p{
        font-size: 1.2rem;
        line-height: 1.3rem;
    }
`;

const CTA = styled.div`
    margin: 0;
    width: 300px;
    height: 250px;
    background-image: url(${source});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media only screen and (max-width: 800px){
        width: 60%;
    }
`;

const Button = styled(Link)`
    display: block;
    background-color: rgb(17, 45, 89);
    width: 100%;
    text-align: center;
    color: white;
    padding: 1rem 0 1rem 0;
    :hover{
        cursor: pointer;
        background-color: rgba(17, 45, 89, .7)
    }
`;

const Booking = () => (
    <Container>
        <TextWrap>
            <h2>Come visit us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe eius ipsum a quidem, aperiam nam consectetur explicabo qui atque incidunt quam, modi, eum delectus?</p>
        </TextWrap>
        <CTA>
            <Button>Book Now</Button>
        </CTA>
    </Container>
);

export default Booking;
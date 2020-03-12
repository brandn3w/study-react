import React from 'react';
import Container from '../Container/Container';
import Hero from "../Hero/Hero.js";
import {infoContents} from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} image={infoContents.image} />
    <p>{infoContents.textsample}</p>
  </Container>
);

export default Info;
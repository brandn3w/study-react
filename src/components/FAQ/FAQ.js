import React from 'react';
import Container from '../Container/Container';
import Hero from "../Hero/Hero.js";
import {faqContents} from '../../data/dataStore';


const FAQ =()=> (
<Container>
<Hero titleText={faqContents.title} image={faqContents.image} />
<p>{faqContents.textsample}</p>
</Container>

);

export default FAQ;
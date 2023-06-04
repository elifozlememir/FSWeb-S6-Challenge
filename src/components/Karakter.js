// Karakter bileşeniniz buraya gelecek

import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Films from './Films';


const Karakter=(props)=>{
  

const {index,item}=props;



return(
    <div>

<AccordionItem>
          <AccordionHeader targetId={index}>{item.name}</AccordionHeader>
          <AccordionBody accordionId={index}>
            <p>Gender:{item.gender}</p>
            <p>Height:{item.height}</p>
            <p>Mass:{item.mass}</p>
            <p>BirthYear:{item.birth_year}</p>
            <p>Eye Color:{item.eye_color}</p>
            <p>Hair ColorGender:{item.hair_color}</p>
            <p>Skin Color:{item.skin_color}</p>
            <p>Appears in {item.films.length} films</p>
            <Films films={item.films}></Films>
            
          </AccordionBody>
        </AccordionItem> 
    </div>
)

}

export default Karakter;







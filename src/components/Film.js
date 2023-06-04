// Karakter bileşeniniz buraya gelecek

import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Film=(props)=>{


  const [filmler,setFilmler]=useState();

useEffect(()=>{
  axios.get("https://swapi.dev/api/films/")
  .then(res =>{
    setFilmler(res.data[0].results)
    console.log(res.data[0].results)
  })
},[])



const {index,item}=props;



return(
    <div>

 <AccordionItem>
          <AccordionHeader targetId={index}>Episode:" {item} "</AccordionHeader>
          <AccordionBody accordionId={index}>
            <p>{filmler[index].opening_crawl}</p>
            <p>Directed by: {filmler[index].director}</p>
            <p>Produced by:{filmler[index].producer}</p>
            <p>Release Date:{filmler[index].release_date}</p>

          </AccordionBody>
        </AccordionItem>  
    </div>
)

}

export default Film;







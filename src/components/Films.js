import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Karakter from './Karakter';
import Film from './Film';


const Films=(props)=>{


const {films}=props;
/* console.log(films); */


    const [open, setOpen] = useState('0');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };



return(
    <div>

{films.map((item,index)=>{


    return(
    <Accordion open={open} toggle={toggle}>
<Film item={item} index={index} ></Film>

    </Accordion>
        
    )
})}

    </div>
)

}

export default Films;
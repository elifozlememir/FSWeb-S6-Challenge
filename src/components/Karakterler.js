import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Karakter from './Karakter';


const Karakterler=(props)=>{

const {veri}=props;


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

{veri.map((item,index)=>{

    return(
    <Accordion open={open} toggle={toggle}>
                 <Karakter item={item} index={index}></Karakter>

    </Accordion>
        
    )
})}
    </div>
)

}

export default Karakterler;
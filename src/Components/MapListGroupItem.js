import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

export const MapListGroupItem = ({data})=>{
  return(
      data.map((elem)=><ListGroupItem key={elem}>{elem} </ListGroupItem>)
  )
};
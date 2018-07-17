import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import MapLanguages from './MapLanguages';


const Language = ({languages}) =>{
    const {title, data} = languages;
  return(
      <section id={"languages"}>
          <Grid>
              <Row>
                  <Col xs={12} md={12}>
                      <h2 className={"text-center"}>{title}</h2>
                  </Col>
                  <Col xs={12} md={12}>
                      <MapLanguages data={data}/>
                  </Col>
              </Row>
          </Grid>
      </section>
  )
};

export default Language;
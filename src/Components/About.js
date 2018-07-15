import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import profile from '../img/personalPhoto.jpg';

const About = ({about}) =>{
    const {title, description} = about;
    return(
      <section id="about">
          <h1 className={"text-center"}>{title}</h1>
          <Grid>
              <Row>
                  <Col xs={8} md={6}>
                      <img className={"pull-right"} style={{height:'20%', width:'50%', paddingBottom:'7%'}} src={profile} alt={"Profile of Vinícius Arré, Full Stack developer"} />
                  </Col>
                  <Col xs={12} md={4}>
                      {description}
                  </Col>
              </Row>
          </Grid>

      </section>

    );
};

export default About;
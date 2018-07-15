import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import profile from '../img/personalPhoto.jpg';

const About = ({about}) =>{
    const {title, description} = about;
    return(
      <section id="about">
          <h1 className={"text-center"}>{title}</h1>
          <Grid>
              <Row>
                  <Col xs={12} md={12} >
                    <Col xs={12} md={6} style={{marginTop: '2%', marginLeft:'37%'}}>
                        <Image style={{height:'20%', width:'50%', paddingBottom:'7%'}} responsive src={profile} alt={"Profile of Vinícius Arré, Full Stack developer"} />

                    </Col>

                      <Col xs={12} md={12}>
                      {description}
                    </Col>
                  </Col>

              </Row>
          </Grid>

      </section>

    );
};

export default About;
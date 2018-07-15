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
                  <Col xs={12} md={12} style={{marginTop: '2%'}} className={"pull-center"} >
                    <Col xs={12} md={12} >
                        <img  className="img-responsive" style={{margin:'0 auto', height:'10%', width:'25%', paddingBottom:'7%',}} src={profile} alt={"Profile of Vinícius Arré, Full Stack developer"} />

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
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import profile from '../img/personalPhoto.jpg';
import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/lib/fa/';

const About = ({about}) =>{
    const {title, description} = about;
    return(
      <section id="about">
          <h1 className={"text-center"}>{title}</h1>
          <h3 className={"text-center"}>
              <a href={"https://goo.gl/uuL7KV"} style={{marginRight:'0.5%'}}>
                  <FaTwitter/>
              </a>
              <a href={"https://goo.gl/rpAKKm"} style={{marginRight:'0.5%'}}>
                  <FaGithub/>
              </a>
              <a href={"https://goo.gl/QJzdAE"} style={{marginRight:'0.5%'}}>
                  <FaLinkedin/>
              </a>
          </h3>
          <Grid>
              <Row>

                  <Col xs={12} md={12} style={{marginTop: '1%'}}>
                      <Col xs={12} md={12} >
                          <img  className="img-responsive" style={{margin:'0 auto', height:'10%', width:'25%', paddingBottom:'3%',}} src={profile} alt={"Profile of Vinícius Arré, Full Stack developer"} />
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
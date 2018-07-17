import React from 'react';
import {Grid, Col, Row } from 'react-bootstrap';
import {DataToPanel} from "./DataToPanel";

const Projects = ({projects}) =>{
    const {title,data} = projects;
    return(
        <section id={"projects"}>

            <h2 className={"text-center"} >{title}</h2>

            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <DataToPanel data={data}/>
                    </Col>
                </Row>
            </Grid>
        </section>
    )
};

export default Projects;
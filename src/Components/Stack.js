import React from 'react';
import {Grid, Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import {MapListGroupItem} from "./MapListGroupItem";



const Stack = ({content, stack2}) =>{
    const {title, frontend, backend, rdbms, nosql, others} = content;
    const {header, data } = stack2;
    return(

        <section id="stack1" style={{backgroundColor:'lightblue'}}>
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <h2 className={"text-center"}>{title}</h2>
                        <ListGroup style={{boxShadow: '5px 5px gray'}} >
                            <ListGroupItem header="Frontend">{frontend} </ListGroupItem>
                            <ListGroupItem header="Backend">{backend} </ListGroupItem>
                            <ListGroupItem  header="RDBMS Databases">{rdbms} </ListGroupItem>
                            <ListGroupItem  header="NoSQL Databases">{nosql} </ListGroupItem>
                            <ListGroupItem  header="Others">{others} </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2 className={"text-center"}>{header}</h2>
                        <ListGroup >
                            <MapListGroupItem data={data}/>
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        </section>
    )
};

export default Stack
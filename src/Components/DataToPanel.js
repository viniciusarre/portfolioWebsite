import React from 'react';
import { Col, Panel } from 'react-bootstrap';

export const DataToPanel = ({data}) =>{
    return data.map((elem)=>
        <Col xs={12} md={3}>
            <Panel id={elem.title}>
                <Panel.Heading>
                    <Panel.Title>
                        {elem.title}
                    </Panel.Title>
                    <Panel.Toggle componentClass="a">
                        Toggle
                    </Panel.Toggle>
                    <Panel.Collapse>
                        <Panel.Body>
                            {elem.description}
                            <a href={elem.link}>Check it out! </a>
                        </Panel.Body>
                        <Panel.Footer>
                            Built with: {elem.stack}
                        </Panel.Footer>
                    </Panel.Collapse>

                </Panel.Heading>
            </Panel>
        </Col>)
};
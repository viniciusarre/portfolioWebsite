import React from 'react';
import {Panel, Col} from 'react-bootstrap';



const MapLanguages = ({data})=>{
  return data.map((elem)=>
      <Col xs={12} md={4}>
          <Panel id={elem.language}>
              <Panel.Heading>
                  <Panel.Title toggle>
                      {elem.language}
                  </Panel.Title>
                  <Panel.Collapse>
                      <Panel.Body>
                          {elem.description}
                      </Panel.Body>
                      <Panel.Footer>
                          {elem.level}
                      </Panel.Footer>
                  </Panel.Collapse>

              </Panel.Heading>
          </Panel>
      </Col>
  )
};

export default MapLanguages;


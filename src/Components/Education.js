import React, {Component} from 'react';
import {Col, Row, Grid, Image} from 'react-bootstrap';
import logofatec from '../img/logofatec.png';
import logofreecodecamp from '../img/logofreecodecamp.png';
import logoduoc from '../img/logoduoc.png';
import logoudemy from '../img/logoudemy.png';

export default class Education extends Component {
    constructor(props){
        super(props);
        this.state = {header:"",message:"", display: false}

    }
    render() {
        const {title,fatec, freecodecamp, duoc, udemy} = this.props.info;
        return (
            <section id="#education">
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <h2 className={"text-center"}>{title}</h2>
                        </Col>
                    </Row>
                    <Row>
                            <Col xs={6} md={12}  bsClass={"pull-right"}>
                                <Col xs={12} md={3}>
                                    <a href={"http://www.fatecjales.edu.br"}
                                       onMouseOver={()=>this.setState({display:true, header: fatec.title, message:fatec.desc})}>
                                        <Image  src={logofatec} responsive/>
                                    </a>

                                    <blockquote className={"visible-xs block"}><h1>{fatec.title}</h1>{fatec.desc}</blockquote>
                                </Col>
                                <Col xs={12} md={3}>
                                    <a href={"https://www.udemy.com/"}
                                       onMouseOver={()=>this.setState({display:true, header: udemy.title, message:udemy.desc})}>
                                        <Image src={logoudemy} responsive />
                                    </a>
                                    <blockquote className={"visible-xs block"}><h1>{udemy.title}</h1>{udemy.desc}</blockquote>
                                </Col>
                            </Col>
                                    <Col xs={12} md={3}>
                                        <a href={"https://www.freecodecamp.org/"}
                                           onMouseOver={()=>this.setState({display:true, header: freecodecamp.title,
                                               message:freecodecamp.desc})}>
                                            <Image src={logofreecodecamp} responsive />
                                        </a>
                                        <blockquote className={"visible-xs block"}><h1>{freecodecamp.title}</h1>{freecodecamp.desc}</blockquote>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <a href={"http://www.duoc.cl/"}
                                           onMouseOver={()=>this.setState({display:true, header: duoc.title, message:duoc.desc})}>
                                            <Image src={logoduoc} responsive />
                                        </a>
                                        <blockquote className={"visible-xs block"}><h1>{duoc.title}</h1>{duoc.desc}</blockquote>
                                    </Col>
                    </Row>
                    <Row>
                        <Col md={12} xs={12}>
                            {this.state.display && <blockquote className={"hidden-xs block"}><h1>{this.state.header}</h1>{this.state.message}</blockquote>}
                        </Col>
                    </Row>

                </Grid>
            </section>
        );
    }
}


import React, { Component } from 'react';
import Header from '../Header/Header';
import Lookup from '../Lookup/Lookup';
import { Container, Row, Col } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
           
           <div>
           <Header/>
           
            <Container>
                <Row>
                    <Col md="3">
                    <Lookup/>
                    </Col>
                    <Col md="9">
                 
                    </Col>
                </Row>
              
            </Container>
            </div>
        )
    }
}

import React, { Component } from 'react';
import Header from '../Header/Header';
import Lookup from '../Lookup/Lookup';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Login } from '../Login';

export default class Home extends Component {
    render() {
        return (
           localStorage.getItem("loginUserApp") !=null?(
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
            </div>):<Redirect to="/login"/>
        )
    }
}

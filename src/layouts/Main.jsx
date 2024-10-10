import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/leftNav/leftNav';
import RightNav from '../pages/shared/rightNav/rightNav';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row className='flex-row justify-content-around'>
                    <Col lg={3}>
                       <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                       <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer> </Footer>
        </div>
    );
};

export default Main;
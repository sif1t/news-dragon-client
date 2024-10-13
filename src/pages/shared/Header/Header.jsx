import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small className='text-secondary'>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    বিশ্ববিদ্যালয়ের সব শিক্ষক কেন ভিসি হতে চায়, প্রশ্ন শিক্ষা উপদেষ্টার
                    বিশ্ববিদ্যালয়ের শিক্ষকদের সবাই কেন ভিসি-প্রোভিসি হওয়ার আগ্রহ দেখায় সেটি নিয়ে প্রশ্ন রেখেছেন অন্তর্বর্তীকালীন সরকারের শিক্ষা ও পরিকল্পনা উপদেষ্টা ওয়াহিদউদ্দিন মাহমুদ।

                    সোমবার জাতীয় অর্থনৈতিক পরিষদের নির্বাহী কমিটির (একনেক) বৈঠক শেষে রাজধানীর শেরেবাংলা নগরে এনইসি সম্মেলনকক্ষে আয়োজিত এক সংবাদ সম্মেলনে এই প্রশ্ন তোলেন।

                    মি. মাহমুদ বলেন,“বিশ্ববিদ্যালয়ের এত শিক্ষক ৩০০,৪০০, ৫০০; সবাই কেন ভিসি হতে চায়, আমি বুঝি না। আমি তো কখনো ভিসি হতে চাইনি।”

                    তিনি প্রশ্ন রাখেন, “শত শত শিক্ষক ভিসি-প্রো ভিসি হতে চান, কিন্তু তারা পড়াতে চান না কেন, বুঝতে পারি না।”

                    দেশের বিভিন্ন প্রকল্পের আওতায় কত গাড়ি আছে সেই হিসাব নেয়ার সিদ্ধান্ত হয়েছে বলেও সংবাদ সম্মেলনে জানান শিক্ষা ও পরিকল্পনা উপদেষ্টা।</Marquee>

            </div>
             <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>

    );
};

export default Header;   
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'



const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button variant="outline-primary"> <FaGoogle />
                Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub />
                Login with Github</Button>
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item disabled><FaFacebook></FaFacebook>facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>

    );
};

export default RightNav;

import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const {creteUser} = useContext(AuthContext);

    const handleRegister = event => {
           event.preventDefault();
           const form = event.target;
           const name = form.name.value;
           const photo = form.photo.value;
           const email = form.email.value;
           const password = form.password.value; 

           console.log (name, photo, email, password);
    }

    return (
        <Container className='w-25 mx-auto'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Your Photo Url" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name='accept' label="Accept Terms and Condition" />
            </Form.Group>
           <Form.Text></Form.Text>
            <Button className='w-100' variant="primary" type="submit">
                Register
            </Button>
            <br />
            <Form.Text className="text-secondary">
               Already Have an Account <Link to='/login'>Login</Link>
                </Form.Text>
            <Form.Text className="text-danger">
                   
                </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;
 
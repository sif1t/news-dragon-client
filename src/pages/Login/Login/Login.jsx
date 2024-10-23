import React from 'react';
import { Container, Form , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='name' placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
               <Form.Text></Form.Text>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                     Don't Have an account  <Link to='/register'>Register</Link>
                    </Form.Text>
                <Form.Text className="text-danger">
                       
                    </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;
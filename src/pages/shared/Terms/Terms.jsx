import React from 'react';
import { Link } from 'react-router-dom';


const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Welcome to our terms and conditions page. Please read the following terms carefully.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;
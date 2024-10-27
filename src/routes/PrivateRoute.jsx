import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext (AuthContext); 
    const location = useLocation(); 
    console.log (location);

    if (loading) {
        return  <Spinner animation="border" variant="primary" />;
    }
    
    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;


/*
------------------
steps
------------------
1. check user is logged in or not   
3. Else redirect to login page
4. setup the private router
5.handle login 
*/

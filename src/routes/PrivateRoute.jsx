import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const user = useContext (AuthContext); 
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;


/*
------------------
steps
------------------
1. check user is logged in or not   
3. Else redirect to login page
4. setup the private router
*/

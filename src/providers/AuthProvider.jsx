import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);


const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

 const creteUser = (email, password) => {
    setLoading(true);
     return  createUserWithEmailAndPassword (auth, email, password);
 }


 const signInUser  = (email, password) => {
    setLoading(true);
      return signInWithEmailAndPassword (auth, email, password);
 }

 const logOut = () => {
    setLoading(true);
     return signOut(auth);
 }


 useEffect (()=>{
   const unsubscribe=  onAuthStateChanged(auth,loggedUser => {
        console.log ('looged in uder inside auth start obsrver', loggedUser);
        setUser(loggedUser);
        setLoading(false);
        
      })
        return () => {
            unsubscribe(); 
        }
 }, [])


    const authInfo  = {
        user,
        loading,
        creteUser,
        signInUser,
        logOut
    };

    return (
         <AuthContext.Provider value={authInfo}>
              {children}
         </AuthContext.Provider>
    );
};
 
export default AuthProvider;   
 

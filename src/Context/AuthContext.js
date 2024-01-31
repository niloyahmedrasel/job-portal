import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config';



export const authContext = createContext()
const AuthContext = ({children}) => {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)

    const auth=getAuth(app)

    const signup =(email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass,)
    }
    const signin =(email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }
    
    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsubscribe();
    },[])


   
    const info={signup,signin,logOut,user}
    return (
        <authContext.Provider value={info}  >
        {children}
        </authContext.Provider>
    );
};

export default AuthContext;

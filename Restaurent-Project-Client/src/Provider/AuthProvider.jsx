import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firbase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  const signOutUser = () =>{
    setLoading(true);
    return signOut(auth);
  }

  //update user Profile
  const updateUserProfile = (name,photoURL) =>{
         return updateProfile(auth.currentUser,{
          displayName:name, photoURL:photoURL
         })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      console.log('current user',currentUser);
      setLoading(false)
    })
    return()=>{
      return unsubscribe();
    }

  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signOutUser,
    updateUserProfile
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
import React, { createContext, useState, useEffect } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleprovider = new GoogleAuthProvider();

  // Create a new user with email and password
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential; // Return userCredential so that it can be used in Signup
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error; // Re-throw the error to be caught in Signup
    } finally {
      setLoading(false);
    }
  };
  
  const loginWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleprovider);
  }

  const login =(email, password) =>
{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password)
}

const logOut = () =>{
  return signOut(auth)
}



  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, []);


  // Auth context value
  const authInfo = {
    user,
    loading,
    createUser,
    loginWithGoogle,
    login,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

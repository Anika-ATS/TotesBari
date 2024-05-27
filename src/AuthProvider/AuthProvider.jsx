import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../FireBase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // checking user is in or not
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

   //user create 
   const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


//   signin

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

//   logout
    const logout = () => {
    return signOut(auth);
    // (auth).then(() => setUser(null));
  };










  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);



  };


  //   checking login or not
  useEffect(() => {
    const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // setLoading(false);
        console.log(currentUser);
      } else {
        // setLoading(false);
      }
    });
    return () => {
      return unscubcribe();
    };
  }, []);

  const authInfo = { user, googleLogin ,createUser,signIn,logout};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;

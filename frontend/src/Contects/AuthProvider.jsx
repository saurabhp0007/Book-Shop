// AuthProvider.js
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const googleProvider = new GoogleAuthProvider(); 

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .finally(() => {
        setLoading(false);
      });
  }
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}
const logout = () => {
    return signOut(auth);
}

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          
          setUser(currentUser);
          setLoading(false);
      });
      return () => {
        return unsubscribe();
      }
      
  }, [user]);

  const AuthInfo = {
    createUser,
    user,
    loading,
    loginWithGoogle,
    login,
    logout,
  };
 

  return (
    <AuthContext.Provider value={ AuthInfo }>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

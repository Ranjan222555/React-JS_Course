import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  const [registerFormData, setregisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
  });

  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const navigate = useNavigate();

  function RegisterWithFirebase() {
    setloading(true);
    const { email, password } = registerFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function LoginWithFirebase() {
    setloading(true);
    const { email, password } = loginFormData;
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handelLogout() {
    return signOut(auth);
  }

  useEffect(() => {
    const checkAuthstate = onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser, "currentuser");
      setuser(currentuser);
      setloading(false);
    });

    return () => {
      checkAuthstate();
    };
  }, []);

  useEffect(() => {
    if (user) navigate("/profile");
  }, [user]);

  if (loading) return <h2>Loading Please Wait!!!</h2>;

  return (
    <AuthContext.Provider
      value={{
        registerFormData,
        setregisterFormData,
        RegisterWithFirebase,
        loading,
        user,
        loginFormData,
        setloginFormData,
        LoginWithFirebase,
        handelLogout,
        setloading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { AuthContext } from "./";

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const initializeUser = async (authUser) => {
    if (authUser) {
      setCurrentUser({ ...authUser });

      const refDoc = doc(db, "users", authUser.uid);
      const docSnap = await getDoc(refDoc);
      const role = docSnap.data().role;

      setRole(role);
      setIsLoggedIn(true);
    } else {
      setCurrentUser(null);
      setIsLoggedIn(false);
      setRole("");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribeFunc = onAuthStateChanged(auth, initializeUser);
    return unsubscribeFunc;
  }, []);

  const value = {
    currentUser,
    isLoggedIn,
    role,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

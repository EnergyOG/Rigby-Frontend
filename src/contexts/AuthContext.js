import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import LoadingPage from "../users/components/LoadingPage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unSub;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading ? children : <LoadingPage/>}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
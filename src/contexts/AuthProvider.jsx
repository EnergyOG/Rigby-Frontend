import { useState, useEffect } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import LoadingPage from "../users/components/LoadingPage";

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(null); // null = loading

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/verify", { withCredentials: true }) // backend cookie verify
      .then((res) => setAuthenticated(res.data.authenticated))
      .catch(() => setAuthenticated(false));
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {authenticated === null ? <LoadingPage /> : children}
    </AuthContext.Provider>
  );
}

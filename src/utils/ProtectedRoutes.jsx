import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingPage from "../users/components/LoadingPage";

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axios.get("https://rigby-backend-deployment-824i.onrender.com/api/auth/", {
      withCredentials: true
    })
    .then(() => setIsAuthenticated(true))
    .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) return <LoadingPage />; // prevents instant redirect

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
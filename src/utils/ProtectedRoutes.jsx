import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios.js";
import LoadingPage from "../users/components/LoadingPage.jsx"

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await api.get("/auth/verify");
        setAuthorized(true);
      } catch (err) {
        setAuthorized(false);
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  if (loading) return <LoadingPage />;
  return authorized ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
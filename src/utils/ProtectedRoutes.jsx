import { Navigate } from "react-router-dom";
import api from "../api/axios";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    api.get("/api/auth/check-auth") // backend should return 200 if valid cookie
      .then(() => setAuthorized(true))
      .catch(() => setAuthorized(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return authorized ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

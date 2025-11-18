import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import LoadingPage from "../users/components/LoadingPage";

export default function PrivateRoute() {
  const { authenticated } = useContext(AuthContext);

  if (authenticated === null) return <LoadingPage/>;

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}
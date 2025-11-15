import { Route, Routes } from "react-router-dom";
import LoginPage from "./users/components/auth/LoginPage";
import RegisterPage from "./users/components/auth/RegisterPage";
import TopBar from "./users/components/TopBar";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function MainLayout() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <div className="h-[100vh]">
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/*" element={<MainLayout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
 
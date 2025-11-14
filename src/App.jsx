import { Route, Routes } from "react-router-dom";
import LoginPage from "./users/components/auth/LoginPage";
import RegisterPage from "./users/components/auth/RegisterPage";
import TopBar from "./users/components/TopBar";
import { Outlet } from "react-router-dom";

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
    <div className="h-[100vh] bg-gray-400">
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected/Main App Layout */}
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </div>
  );
}

export default App;

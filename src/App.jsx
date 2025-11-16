import { Routes, Route } from "react-router-dom";
import LoginPage from "./users/components/auth/LoginPage";
import RegisterPage from "./users/components/auth/RegisterPage";
import MainLayout from "./users/components/MainLayout";
import ProtectedRoute from "./utils/ProtectedRoutes";
import LivePage from "./users/components/LivePage";
import TrendingPage from "./users/components/TrendingPage";
import FeedPage from "./users/components/FeedPage";
import NewestPage from "./users/components/NewestPage";
import PageNotFound from "./users/components/PageNotFound";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<FeedPage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/newest" element={<NewestPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import LoginPage from "./users/components/auth/LoginPage";
import RegisterPage from "./users/components/auth/RegisterPage";
import MainLayout from "./users/components/MainLayout";
import LivePage from "./users/components/LivePage";
import TrendingPage from "./users/components/TrendingPage";
import FeedPage from "./users/components/FeedPage";
import NewestPage from "./users/components/NewestPage";
import PageNotFound from "./users/components/PageNotFound";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./users/components/side-bar/Home";
import Explore from "./users/components/side-bar/Explore";
import AI from "./users/components/side-bar/AI"
import Bookmarks from "./users/components/side-bar/Bookmarks";
import Communities from "./users/components/side-bar/Communities"
import Notification from "./users/components/side-bar/Notification";
import List from "./users/components/side-bar/Lists"
import Messages from "./users/components/side-bar/Messages"
import Profile from "./users/components/side-bar/Profile"



function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<PrivateRoutes />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<FeedPage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/newest" element={<NewestPage />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/notifications" element={<Notification/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/ai" element={<AI/>}/>
          <Route path="/communities" element={<Communities/>}/>
          <Route path="/bookmarks" element={<Bookmarks/>}/>
          <Route path="/lists" element={<List/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
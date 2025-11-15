import { NavLink, Route, Routes } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../../assets/rigby-logo.png";
import tagline from "../../assets/tag-line.png";
import LivePage from "./LivePage";
import TrendingPage from "./TrendingPage";
import FeedPage from "./FeedPage";
import NewestPage from "./NewestPage";
import PageNotFound from "./PageNotFound";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function TopBar() {
  return (
    <div className="box-border h-[100vh]">
      {/* TOP NAV BAR */}
      <div className="bg-white fixed w-full flex flex-col md:flex-row justify-between items-center py-2 px-4 md:px-20 gap-2 shadow">
        {/* Logo & Tagline */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-auto border rounded-md p-1 bg-white"
          />
          <img
            src={tagline}
            alt="tagline"
            className="w-[100px] h-[36px] border rounded-md p-1 bg-white"
          />
        </div>

        {/* NAV MENU */}
        <div className="flex gap-6 h-10 items-center order-last md:order-none">
          {["live", "trending", "feed", "newest"].map((tab) => (
            <NavLink
              key={tab}
              to={`/${tab}`}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-[3px]"
                  : "hover:text-blue-500"
              }
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </NavLink>
          ))}
        </div>

        {/* Profile + Menu Icon on mobile */}
        <div className="flex items-center gap-3">
          <span className="font-medium">Profile</span>
          <Menu className="text-2xl md:hidden cursor-pointer" />
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex pt-[90px] md:pt-[60px] h-full overflow-y-auto">
        {/* LEFT SIDEBAR hide on mobile */}
        <div className="hidden md:block w-[25%]">
          <LeftSidebar />
        </div>

        {/* MIDDLE CONTENT always visible */}
        <div className="w-full md:w-[50%] border-gray-300 border">
          <Routes>
              <Route path="/" element={<FeedPage />} />
              <Route path="/live" element={<LivePage />} />
              <Route path="/trending" element={<TrendingPage />} />
              <Route path="/feed" element={<FeedPage />} />
              <Route path="/newest" element={<NewestPage />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>

        {/* RIGHT SIDEBAR hide on mobile */}
        <div className="hidden md:block w-[25%]">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default TopBar;

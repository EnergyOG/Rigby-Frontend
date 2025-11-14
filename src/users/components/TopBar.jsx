import { NavLink, Route, Routes } from "react-router-dom";
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
      <div className="bg-white fixed w-full flex justify-between items-center py-1 px-20">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[52px] h-auto border rounded-md py-1 px-1 bg-white"
          />
          <img
            src={tagline}
            alt="tagline"
            className="w-[100px] h-[36px] border rounded-md py-1 px-1 bg-white"
          />
        </div>
        <div className="flex gap-6 h-10 items-center">
          <NavLink
            to="/live"
            className={({ isActive }) =>
              isActive ? "text-blue-500 border-b-[3px]" : "hover:text-blue-500"
            }
          >
            Live
          </NavLink>
          <NavLink
            to="/trending"
            className={({ isActive }) =>
              isActive ? "text-blue-500 border-b-[3px]" : "hover:text-blue-500"
            }
          >
            Trending
          </NavLink>
          <NavLink
            to="/feed"
            className={({ isActive }) =>
              isActive ? "text-blue-500 border-b-[3px]" : "hover:text-blue-500"
            }
          >
            Feed
          </NavLink>
          <NavLink
            to="/newest"
            className={({ isActive }) =>
              isActive ? "text-blue-500 border-b-[3px]" : "hover:text-blue-500"
            }
          >
            Newest
          </NavLink>
        </div>
        <div>Profile</div>
      </div>

      <div className="flex pt-[60px] h-full overflow-y-auto">
        <div className="w-[25%]">
          <LeftSidebar />
        </div>

        <div className="w-[50%] border-gray-300 border">
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/live" element={<LivePage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/newest" element={<NewestPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>

        <div className="w-[25%]">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default TopBar;

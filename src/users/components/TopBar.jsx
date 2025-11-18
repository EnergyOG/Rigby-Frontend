import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../../assets/rigby-logo.png";
import tagline from "../../assets/tag-line.png";

function TopBar() {
  return (
    <div className="bg-white fixed w-full flex flex-col md:flex-row justify-between items-center py-2 px-4 md:px-20 gap-2 shadow z-50">
      {/* Logo & Tagline */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-[50px] h-auto rounded-md p-1 bg-white" />
        <img src={tagline} alt="tagline" className="w-[100px] h-[36px] rounded-md p-1 bg-white" />
      </div>

      {/* NAV MENU */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 w-full md:w-auto order-last md:order-none">
        {["live", "trending", "feed", "newest"].map((tab) => (
          <NavLink
            key={tab}
            to={`/${tab}`}
            className={({ isActive }) =>
              isActive ? "text-blue-500 border-b-[3px]" : "hover:text-blue-500"
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
  );
}

export default TopBar;
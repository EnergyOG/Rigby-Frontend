import { NavLink } from "react-router-dom";
import {
  Birdhouse,
  Search,
  Megaphone,
  MessageSquareMore,
  Bot,
  ScrollText,
  Bookmark,
  Users,
  UserPen,
  CircleEllipsis,
  BadgeCheck
} from "lucide-react";

const menuItems = [
  { label: "Home", path: "/home", icon: <Birdhouse /> },
  { label: "Explore", path: "/explore", icon: <Search /> },
  { label: "Notification", path: "/notifications", icon: <Megaphone /> },
  { label: "Messages", path: "/messages", icon: <MessageSquareMore /> },
  { label: "AI", path: "/ai", icon: <Bot /> },
  { label: "Lists", path: "/lists", icon: <ScrollText /> },
  { label: "Bookmarks", path: "/bookmarks", icon: <Bookmark /> },
  { label: "Communities", path: "/communities", icon: <Users /> },
  { label: "Profile", path: "/profile", icon: <UserPen /> },
  { label: "More", path: "/more", icon: <CircleEllipsis /> },
  { label: "Post", path: "/post", icon: <BadgeCheck /> },
];

function LeftSidebar() {
  return (
    <div className="h-full py-6 flex flex-col justify-between text-lg">
      
      {/* NAV LINKS */}
      <div className="flex flex-col gap-4 px-8">
        {menuItems.map(({ label, path, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 text-blue-500 font-semibold text-[20px]"
                : "flex items-center gap-3 hover:text-blue-500"
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </div>

      {/* PROFILE AREA */}
      <div className="px-6 py-4 border-t w-full">
        <p className="font-medium">Profile details</p>
      </div>
    </div>
  );
}

export default LeftSidebar;

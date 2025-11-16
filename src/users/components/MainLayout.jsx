import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function MainLayout() {
  return (
    <div className="flex flex-col md:flex-row h-[100vh] overflow-y-auto">
      <TopBar />

      {/* LEFT SIDEBAR hide on mobile */}
      <div className="flex w-full mt-60 md:mt-17">
      <div className="hidden md:block w-[25%]">
        <LeftSidebar />
      </div>

      {/* MIDDLE CONTENT */}
      <div className="w-full md:w-[50%] border-gray-300 border">
        <Outlet />
      </div>

      {/* RIGHT SIDEBAR hide on mobile */}
      <div className="hidden md:block w-[25%]">
        <RightSidebar />
      </div>

      </div>
    </div>
  );
}
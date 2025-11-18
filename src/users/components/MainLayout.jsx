import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function MainLayout() {
  return (
    <div className="flex flex-col h-[100vh]">
      {/* TOPBAR */}
      <TopBar />

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-1 overflow-auto md:mt-15">

        {/* LEFT SIDEBAR - hidden on mobile */}
        <div className="hidden md:block w-[25%] border-r border-gray-200">
          <LeftSidebar />
        </div>

        {/* MIDDLE CONTENT */}
        <div className="w-full md:w-[50%] border-r border-gray-200 overflow-auto">
          <Outlet />
        </div>

        {/* RIGHT SIDEBAR - hidden on mobile */}
        <div className="hidden md:block w-[25%]">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
export default MainLayout;

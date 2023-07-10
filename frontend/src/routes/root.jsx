import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="w-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Root;

import React from "react";
import HeaderDashboard from "../components/HeaderDashboard/HeaderDashboard";

import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex vh-100 ">
      {/* <div className=""> */}
      <Sidebar />
      {/* </div> */}
      <div className="w-100">
        <div className="header w-full">
          <HeaderDashboard />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;

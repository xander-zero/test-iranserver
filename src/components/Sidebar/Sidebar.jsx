import React from "react";
import { Link } from "react-router-dom";
// import { MainLogo } from "../../assets/icons/mainLogo";
import { sidebarData } from "./mock/sidebarData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header d-flex justify-content-center p-2">
        {/* <MainLogo color="#2343A3" /> */}
      </div>
      <ul className="menu-list">
        {sidebarData.map((item) => (
          <li key={item.id}>
            {item.icon("gray")}
            <Link to={item.path_name}>{item.display_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { sidebarData } from "./mock/sidebarData";

import { MainLogo } from "../../assets/icons/mainLogo";

const Sidebar = () => {
  const { isShowSidebar } = useSelector((state) => state.general);

  console.log("isShow", isShowSidebar);

  return (
    <div className={isShowSidebar ? "sidebar active" : "sidebar"}>
      <div className="sidebar-header d-flex align-items-center justify-content-center px-2">
        <MainLogo color="#2343A3" />
      </div>
      <ul className="menu-list">
        {sidebarData.map((item) => (
          <li key={item.id} className="menu-list-item">
            {item.icon("gray")}
            <Link to={item.path_name} className="menu-list-item-link">
              {item.display_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

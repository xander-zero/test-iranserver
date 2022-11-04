import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { sidebarData } from "./mock/sidebarData";

import { MainLogo } from "../../assets/icons/mainLogo";

const Sidebar = () => {
  const { isShowSidebar } = useSelector((state) => state.general);

  const location = useLocation();

  return (
    <div className={isShowSidebar ? "sidebar active" : "sidebar"}>
      <div className="sidebar-header d-flex align-items-center justify-content-center px-2">
        {!isShowSidebar && <MainLogo color="#2343A3" />}
      </div>
      <ul className="menu-list">
        {sidebarData.map((item) => (
          <li
            key={item.id}
            className={
              location.pathname === item.path_name
                ? "menu-list-item active"
                : "menu-list-item"
            }
          >
            <Link
              to={item.path_name}
              className={
                isShowSidebar
                  ? "menu-list-item-link active"
                  : "menu-list-item-link"
              }
            >
              <div className="icon">{item.icon("#333")}</div>
              {!isShowSidebar && <>{item.display_name}</>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

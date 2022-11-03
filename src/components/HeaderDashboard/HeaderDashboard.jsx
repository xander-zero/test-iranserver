import React from "react";

import { useDispatch } from "react-redux";

import Typography from "../../Common/Typography/Typography";
import Dropdown from "./Dropdown/Dropdown";

import { BiMenuAltRight } from "react-icons/bi";
import { toggleSidebar } from "../../redux/action/general";

const HeaderDashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="header-dashboard d-flex items-center justify-content-between p-2">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <div className="mx-2">
            <BiMenuAltRight
              size={20}
              color="#333"
              onClick={() => dispatch(toggleSidebar())}
            />
          </div>
          <Typography>داشبورد</Typography>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <Dropdown />
      </div>
    </div>
  );
};

export default HeaderDashboard;

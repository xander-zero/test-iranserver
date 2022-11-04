import React from "react";

import { useDispatch } from "react-redux";

import Typography from "../../Common/Typography/Typography";

import { BiMenuAltRight } from "react-icons/bi";
import { toggleSidebar } from "../../redux/action/general";
import { userInfo } from "../../helper/userData";

const HeaderDashboard = () => {
  const dispatch = useDispatch();
  const userData = userInfo();
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
        <Typography>{userData?.email}</Typography>
      </div>
    </div>
  );
};

export default HeaderDashboard;

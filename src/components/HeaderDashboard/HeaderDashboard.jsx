import React from "react";

import Typography from "../../Common/Typography/Typography";
import Dropdown from "./Dropdown/Dropdown";

const HeaderDashboard = () => {
  return (
    <div className="d-flex items-center justify-content-between p-2">
      <div>
        <Typography>داشبورد</Typography>
      </div>
      <div>
        <Dropdown />
      </div>
    </div>
  );
};

export default HeaderDashboard;

import React from "react";

import Typography from "../../Common/Typography/Typography";

const HeaderForm = () => {
  return (
    <>
      <Typography className="headerText font-bold">ورود به پورتال</Typography>
      <div className="my-1">
        <Typography className="subHeaderText font-bold">
          لطفا نام کاربری (ایمیل) و رمز عبور خود را وارد کنید.
        </Typography>
      </div>
    </>
  );
};

export default HeaderForm;

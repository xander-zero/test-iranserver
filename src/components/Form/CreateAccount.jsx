import React from "react";
import { Link } from "react-router-dom";

import Typography from "../../Common/Typography/Typography";
import SubmitButton from "./SubmitButton";

const CreateAccount = () => {
  return (
    <div className="d-flex align-items-center justify-content-between my-4">
      <SubmitButton title="ورود" />
      <div>
        <Typography className="create-account">
          حساب کاربری نساخته اید؟{" "}
          <span>
            <Link to="/">ثبت نام</Link>
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default CreateAccount;

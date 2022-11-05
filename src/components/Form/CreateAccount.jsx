import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";

import Typography from "../../Common/Typography/Typography";
import SubmitButton from "./SubmitButton";

const CreateAccount = () => {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="d-flex align-items-center justify-content-between my-4">
      <SubmitButton
        title={
          loading ? <Spinner animation="border" variant="border" /> : "ورود"
        }
      />
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

import React from "react";
import { Link } from "react-router-dom";

const RememberMe = ({ label }) => {
  return (
    <div className="d-flex align-items-center justify-content-between w-full ">
      <div className="form-check d-flex align-items-center flex-1">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {label}
        </label>
      </div>
      <Link to="/">
        <p className="forget-password">رمزتان را فراموش کرده اید ؟</p>
      </Link>
    </div>
  );
};

export default RememberMe;

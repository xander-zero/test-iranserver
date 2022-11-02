import React from "react";
import { Link } from "react-router-dom";

const RememberMe = ({ label }) => {
  return (
    <div className="d-flex align-items-center justify-content-between w-full ">
      <div class="form-check d-flex align-items-center flex-1">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
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

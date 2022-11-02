import React from "react";
import { deCodeToken } from "../../../utils/jwtToken";

const Dropdown = () => {
  const userData = deCodeToken(localStorage.getItem("token"));

  console.log("userData", userData);

  return (
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
};

export default Dropdown;

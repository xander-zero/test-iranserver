import React from "react";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return (
    <div className="my-1">
      <p className="error-text">{error}</p>
    </div>
  );
};

export default ErrorMessage;

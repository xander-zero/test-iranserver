import React from "react";

import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <div>
      <button onClick={handleSubmit} className="button-submit">
        {title}
      </button>
    </div>
  );
};

export default SubmitButton;

import React from "react";

import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import InputControl from "./InputControl";

const InputField = ({ name, ...otherProps }) => {
  const { handleChange, errors, touched, setFieldTouched } = useFormikContext();

  return (
    <div class="mb-3 ">
      <InputControl
        {...otherProps}
        handleChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default InputField;

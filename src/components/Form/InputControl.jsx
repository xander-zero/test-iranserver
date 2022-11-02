import React from "react";

import { Eye } from "../../assets/icons/eye";
import { EyeOff } from "../../assets/icons/eyeOff";

const InputControl = ({
  title,
  placeholder,
  type,
  icon,
  isShowIcon,
  showIcon,
  onBlur,
  handleChange,
}) => {
  return (
    <>
      <label for={placeholder} class="form-label mb-3">
        {title}
      </label>
      <div className="input-field">
        <input
          type={type}
          id={placeholder}
          class="form-control"
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={handleChange}
        />
        {icon && (
          <div className="icon-input-field" onClick={showIcon}>
            {isShowIcon ? <Eye /> : <EyeOff />}
          </div>
        )}
      </div>
    </>
  );
};

export default InputControl;

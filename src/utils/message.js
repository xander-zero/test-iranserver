import { toast } from "react-toastify";

export const successMessage = (message) => {
  toast.success(message, {
    position: "bottom-right",
  });
};

export const errorMessage = (message) => {
  toast.error(message, {
    position: "bottom-right",
  });
};

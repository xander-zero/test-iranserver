export const getToken = () =>
  localStorage.getItem("token") ? localStorage.getItem("token") : null;

export const userInfo = () =>
  localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;

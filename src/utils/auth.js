export const saveAuthData = (userData) => {
  localStorage.setItem("token", userData.token);
  localStorage.setItem("user", JSON.stringify(userData.user));
};

export const getAuthToken = () => {
  return localStorage.getItem("token");
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.reload();
};

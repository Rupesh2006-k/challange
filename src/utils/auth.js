export const isAuthenticated = () => {
  return localStorage.getItem("isAuth") === "true";
};

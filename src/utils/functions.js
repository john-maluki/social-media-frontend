const AUTH_USER = "authUser";

const storeAuthUserOnLocalStorage = (authUser) => {
  localStorage.setItem(AUTH_USER, JSON.stringify(authUser));
};

const getAuthUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(AUTH_USER));
};

const removeAuthUserFromLocalStorage = () => {
  return localStorage.removeItem(AUTH_USER);
};

export {
  storeAuthUserOnLocalStorage,
  getAuthUserFromLocalStorage,
  removeAuthUserFromLocalStorage,
};

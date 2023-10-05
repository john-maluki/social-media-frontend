const AUTH_USER = "authUser";

// const removeAuthUserFromUsersList = (users, authUser) => {
//   return users.filter((user) => user.id !== authUser.id);
// };

const storeAuthUserOnLocalStorage = (authUser) => {
  localStorage.setItem(AUTH_USER, JSON.stringify(authUser));
};

const getAuthUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(AUTH_USER));
};

const removeAuthUserFromLocalStorage = () => {
  return localStorage.removeItem(AUTH_USER);
};

// const getLinkStyle = () => {
//   const linkStyle = {
//     textDecoration: "none",
//     color: "black",
//   };
//   return linkStyle;
// };

// const findUserWithId = (users, id) => {
//   return users.find((user) => user.id === id);
// };

export {
  storeAuthUserOnLocalStorage,
  getAuthUserFromLocalStorage,
  removeAuthUserFromLocalStorage,
};

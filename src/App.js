import logo from "./logo.svg";
import "./App.css";
import Layout from "./layouts/Layout";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import {
  getAuthUserFromLocalStorage,
  removeAuthUserFromLocalStorage,
  storeAuthUserOnLocalStorage,
} from "./utils/functions";
import { MAIN_DOMAIN } from "./utils/constants";
import AuthRoutes from "./routes/AuthRoutes";
import Header from "./components/Header";
import axios from "axios";
import jwt_decode from "jwt-decode";

const jwt_example =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiZmlyc3RfbmFtZSI6IkpvaG4iLCJsYXN0X25hbWUiOiJEb2UiLCJpZCI6MX0sIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.mw3n_IDS7iWnttjeae_sXn9533d3ovXcr7VYfgwweFo";

function App() {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoging, setIsloging] = useState(false);

  const loginFromLocalStorage = () => {
    const storedAuthUser = getAuthUserFromLocalStorage();
    setAuthUser(storedAuthUser);
  };

  const decode_jwt = (token) => {
    const decoded = jwt_decode(token);
    storeAuthUserOnLocalStorage(decoded.sub);
    setAuthUser(decoded.sub);
  };

  const logout = () => {
    removeAuthUserFromLocalStorage();
    setAuthUser(null);
    return navigate("/");
  };

  const toggleIsLogin = () => {
    setIsloging((isLoging) => !isLoging);
  };

  const fetchUserFromServer = (userCredetials) => {
    toggleIsLogin();
    axios
      .post(`${MAIN_DOMAIN}/users`, userCredetials)
      .then((resp) => {
        if (resp.status == 201) {
          decode_jwt(jwt_example);
        } else {
          toast.error("Username or Password is incorrect!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          storeAuthUserOnLocalStorage(null);
          setAuthUser(null);
        }
        toggleIsLogin();
      })
      .catch((error) =>
        toast.error("Error doing the login. Try later", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      );
  };

  const handleLogin = (userCredetials) => {
    fetchUserFromServer(userCredetials);
  };

  useEffect(() => {
    loginFromLocalStorage();
  }, []);
  return (
    <>
      <Header authUser={authUser} logoutFunc={logout} />
      {authUser ? <Layout /> : <AuthRoutes handleLogin={handleLogin} />}

      <ToastContainer />
    </>
  );
}

export default App;

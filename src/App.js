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
import { AuthContext } from "./contexts/AuthContext";
import { SearchPostStringContext } from "./contexts/SearchStringPostContext";

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [postSearchString, setpostSearchString] = useState("");
  const navigate = useNavigate();

  const getPostSearchString = (searchString) => {
    setpostSearchString(searchString);
  };

  const loginFromLocalStorage = () => {
    const storedAuthUser = getAuthUserFromLocalStorage();
    if (storedAuthUser) {
      setAuthUser(decode_jwt(storedAuthUser));
    }
  };

  const decode_jwt = (token) => {
    const decoded = jwt_decode(token);
    return decoded.sub;
  };

  const logout = () => {
    removeAuthUserFromLocalStorage();
    setAuthUser(null);
    return navigate("/");
  };

  const fetchUserFromServer = (userCredetials, isSubmitting) => {
    axios
      .post(`${MAIN_DOMAIN}/login`, userCredetials)
      .then((resp) => {
        if (resp.status === 200) {
          storeAuthUserOnLocalStorage(resp.data.access_token);
          setAuthUser(decode_jwt(resp.data.access_token));
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
      })
      .catch((error) => {
        setAuthUser(null);
        toast.error("Error doing the login. Try later", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        isSubmitting(false);
      });
  };

  const handleLogin = (userCredetials, isSubmitting) => {
    fetchUserFromServer(userCredetials, isSubmitting);
  };

  useEffect(() => {
    loginFromLocalStorage();
  }, []);
  return (
    <>
      <Header
        authUser={authUser}
        logoutFunc={logout}
        getPostSearchString={getPostSearchString}
      />
      <SearchPostStringContext.Provider value={postSearchString}>
        <AuthContext.Provider value={authUser}>
          {authUser ? <Layout /> : <AuthRoutes handleLogin={handleLogin} />}
        </AuthContext.Provider>
      </SearchPostStringContext.Provider>

      <ToastContainer />
    </>
  );
}

export default App;

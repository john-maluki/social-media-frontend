import React, { useState } from "react";
import "../assets/css/LoginPage.css";
// import { Link } from "react-router-dom";

const LoginPage = ({ login, isLoging }) => {
  const [userCredetials, setUserCredetials] = useState({
    username: "",
    password: "",
  });
  const [userCredetialsError, setUserCredetialsError] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    validateLoginForm();
    if (loginFormIsValid()) {
      login(userCredetials);
    }
  };

  const loginFormIsValid = () => {
    return !(
      Boolean(userCredetialsError.username) ||
      Boolean(userCredetialsError.password)
    );
  };

  const validateLoginForm = () => {
    if (userCredetials.username.trim() === "") {
      setUserCredetialsError((userCredetialsError) => ({
        ...userCredetialsError,
        username: "Username required!",
      }));
    } else if (userCredetials.password.trim() === "") {
      setUserCredetialsError((userCredetialsError) => ({
        ...userCredetialsError,
        password: "Password required!",
      }));
    }
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setUserCredetials((userCredetials) => ({
      ...userCredetials,
      [name]: value,
    }));
    setUserCredetialsError((userCredetialsError) => ({
      ...userCredetialsError,
      [name]: "",
    }));
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-text">
          <h1>Login</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="form-control">
              <i className="fa fa-user-o" aria-hidden="true"></i>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Type your email"
                onChange={handleOnChange}
              />
            </div>
            {userCredetialsError.username ? (
              <p className="error">{userCredetialsError.username}</p>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="form-control">
              <i className="fa fa-unlock-alt" aria-hidden="true"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
                onChange={handleOnChange}
              />
            </div>
            {userCredetialsError.password ? (
              <p className="error">{userCredetialsError.password}</p>
            ) : null}
          </div>
          <div className="form-group">
            {/* {isLoging ? (
              <LoaderComponent height={30} />
            ) : (
              <input type="submit" value="LOGIN" />
            )} */}
          </div>
        </form>
        <div className="or-link">
          {/* You don't have an account <Link to="/signup">Signup</Link> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

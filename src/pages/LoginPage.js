import { useFormik } from "formik";
import * as yup from "yup";
import "../assets/css/LoginPage.css";
import { getSendingDataSpinner } from "../utils/functions";

const LoginPage = ({ handleLogin }) => {
  const formSchema = yup.object().shape({
    username: yup.string().email("Invalid email").required("Must enter email"),
    password: yup.string().required("Must enter a password").min(5),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      handleLogin(values, formik.setSubmitting);
    },
  });
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-text">
          <h1>Login</h1>
        </div>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="form-control">
              <i className="fa fa-user-o" aria-hidden="true"></i>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Type your email"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <p className="error">{formik.errors.username}</p>
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
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <p className="error">{formik.errors.password}</p>
          </div>
          <div className="form-group">
            {formik.isSubmitting ? (
              <div className="spinner-loader">{getSendingDataSpinner()}</div>
            ) : (
              <input type="submit" value="LOGIN" />
            )}
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

import React from "react";
import "../assets/css/SignUpPage.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { MAIN_DOMAIN } from "../utils/constants";

const SignUpPage = () => {
  const createUser = (user) => {
    axios
      .post(`${MAIN_DOMAIN}/users`, user)
      .then((resp) => {
        if (resp.status === 201) {
          if (resp.status == 201) {
            toast.error("Account successfully created", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.error("Error creating account", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        }
      })
      .catch((err) => {
        toast.error("Error occured while creating account", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  const formSchema = yup.object().shape({
    first_name: yup.string().required("First name required"),
    last_name: yup.string().required("Last name required"),
    usename: yup.string().email().required("usename required"),
    bio: yup.string().required("Must enter a post"),
    profile_picture: yup.string(),
    email: yup.string().email().required("usename required"),
    password: yup.string().required("Password required"),
    gender: yup.string().required("Gender required"),
    identification_card: yup.string().required("Required"),
    contact: yup.string().required("Required"),
    date_of_birth: yup.date(),
  });
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      profile_picture: "http://uitheme.net/sociala/images/t-10.jpg",
      email: "",
      password: "",
      gender: "",
      identification_card: "",
      date_of_birth: "",
      contact: "",
    },
    validationSchema: formSchema,
    onSubmit: (user) => {
      console.log(user);
      // createUser(post);
    },
  });
  return (
    <div className="signup-page">
      <section className="form-section">
        <h2 className="signup-title">Create an account</h2>
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                name="first_name"
                id="first-name"
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />
              <span className="error">{formik.errors.first_name}</span>
            </div>
            <div className="form-control">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="last-name"
                onChange={formik.handleChange}
                value={formik.values.last_name}
              />
              <span className="error">{formik.errors.last_name}</span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="username">UserName</label>
              <input
                type="email"
                name="username"
                id="username"
                placeholder="use your email"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <span className="error">{formik.errors.username}</span>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <span className="error">{formik.errors.email}</span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="male" value="M" />
              <span></span>
            </div>
            <div className="form-control">
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="female" value="F" />
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="country">Country</label>
              <input type="text" name="country" id="country" />
              <span></span>
            </div>
            <div className="form-control">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="profile-pic">Profile Pic</label>
              <input type="url" name="profile_picture" id="profile-pic" />
              <span></span>
            </div>
            <div className="form-control">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                id="dob"
                onChange={formik.handleChange}
                value={formik.values.date_of_birth}
              />
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="contact">Contact Number</label>
              <input type="tel" name="contact" id="contact" />
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="bio">Bio</label>
              <textarea name="bio" id="bio"></textarea>
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Sign up" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUpPage;

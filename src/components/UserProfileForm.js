import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { MAIN_DOMAIN } from "../utils/constants";
import {
  getHTTPHeaderWithToken,
  getSendingDataSpinner,
} from "../utils/functions";
import { AuthContext } from "../contexts/AuthContext";

const UserProfileForm = ({ userProfileData }) => {
  const authUser = useContext(AuthContext);
  const eighteen_years_ago = dayjs().subtract(18, "year").format("MM-DD-YYYY");
  const createUser = (user) => {
    axios
      .post(`${MAIN_DOMAIN}/users`, user)
      .then((resp) => {
        formik.setSubmitting(false);
        if (resp.status === 201) {
          formik.resetForm();
          toast.success("Account successfully created", {
            position: "top-right",
            autoClose: 1000,
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
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        formik.setSubmitting(false);
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

  const updateUser = (user) => {
    axios
      .patch(
        `${MAIN_DOMAIN}/users/${authUser.id}`,
        user,
        getHTTPHeaderWithToken()
      )
      .then((resp) => {
        formik.setSubmitting(false);
        if (resp.status === 200) {
          toast.success("Changes saved successfully", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error("Error updating account", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        formik.setSubmitting(false);
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
    username: yup.string().email().required("usename required"),
    bio: yup.string(),
    profile_picture: yup.string(),
    email: yup.string().email().required("email required"),
    password: yup.string().required("Password required"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must much")
      .required("Required"),
    gender: yup.string().required("Gender required"),
    identification_card: yup.string().required("Required"),
    contact: yup.string().required("Required"),
    date_of_birth: yup
      .date()
      .max(eighteen_years_ago, "You must be at least 18 years old to register")
      .required("Required field"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: userProfileData.first_name,
      last_name: userProfileData.last_name,
      username: userProfileData.username,
      bio: userProfileData.bio,
      profile_picture: userProfileData.profile_picture,
      email: userProfileData.email,
      password: "",
      gender: userProfileData.gender,
      identification_card: userProfileData.identification_card,
      date_of_birth: userProfileData.date_of_birth,
      contact: userProfileData.contact,
      confirm_password: "",
    },
    validationSchema: formSchema,
    onSubmit: (user) => {
      if ("id" in userProfileData) {
        updateUser(user);
      } else {
        createUser(user);
      }
    },
  });
  return (
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
          <span className="error">
            {formik.touched.first_name && formik.errors.first_name
              ? formik.errors.first_name
              : null}
          </span>
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
          <span className="error">
            {formik.touched.last_name && formik.errors.last_name
              ? formik.errors.last_name
              : null}
          </span>
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
          <span className="error">
            {formik.touched.username && formik.errors.username
              ? formik.errors.username
              : null}
          </span>
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
          <span className="error">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null}
          </span>
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="M"
            onChange={formik.handleChange}
            checked={formik.values.gender === "M"}
          />
          <span></span>
        </div>
        <div className="form-control">
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="F"
            onChange={formik.handleChange}
            checked={formik.values.gender === "F"}
          />
          <span className="error">
            {formik.touched.gender && formik.errors.gender
              ? formik.errors.gender
              : null}
          </span>
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          <label htmlFor="profile-pic">Profile Pic</label>
          <input
            type="url"
            name="profile_picture"
            id="profile-pic"
            onChange={formik.handleChange}
            value={formik.values.profile_picture}
          />
          <span className="error">
            {formik.touched.profile_picture && formik.errors.profile_picture
              ? formik.errors.profile_picture
              : null}
          </span>
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
          <span className="error">
            {formik.touched.date_of_birth && formik.errors.date_of_birth
              ? formik.errors.date_of_birth
              : null}
          </span>
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            onChange={formik.handleChange}
            value={formik.values.contact}
          />
          <span className="error">
            {formik.touched.contact && formik.errors.contact
              ? formik.errors.contact
              : null}
          </span>
        </div>
        <div className="form-control">
          <label htmlFor="identification_card">National ID</label>
          <input
            type="text"
            name="identification_card"
            id="identification_card"
            onChange={formik.handleChange}
            value={formik.values.identification_card}
          />
          <span className="error">
            {formik.touched.identification_card &&
            formik.errors.identification_card
              ? formik.errors.identification_card
              : null}
          </span>
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            id="bio"
            onChange={formik.handleChange}
            value={formik.values.bio}
          ></textarea>
          <span className="error">{formik.errors.bio}</span>
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <span className="error">
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null}
          </span>
        </div>
        <div className="form-control">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            onChange={formik.handleChange}
            value={formik.values.confirm_password}
          />
          <span className="error">
            {formik.touched.confirm_password && formik.errors.confirm_password
              ? formik.errors.confirm_password
              : null}
          </span>
        </div>
      </div>
      <div className="form-group">
        {formik.isSubmitting ? (
          <div className="spinner-loader">{getSendingDataSpinner()}</div>
        ) : "id" in userProfileData ? (
          <input type="submit" value="Save Changes" />
        ) : (
          <input type="submit" value="Sign up" />
        )}
      </div>
    </form>
  );
};

export default UserProfileForm;

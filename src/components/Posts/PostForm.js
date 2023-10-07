import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { MAIN_DOMAIN } from "../../utils/constants";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import { getHTTPHeaderWithToken } from "../../utils/functions";
import { PostsContext } from "../../contexts/PostContext";

const PostForm = () => {
  const authUser = useContext(AuthContext);
  const postContextMethods = useContext(PostsContext);
  const formSchema = yup.object().shape({
    description: yup.string().required("Must enter a post"),
  });
  const formik = useFormik({
    initialValues: {
      description: "",
      user_id: authUser.id,
    },
    validationSchema: formSchema,
    onSubmit: (post) => {
      console.log(post);
      createPost(post);
    },
  });

  const createPost = (post) => {
    axios
      .post(`${MAIN_DOMAIN}/posts`, post, getHTTPHeaderWithToken())
      .then((resp) => {
        if (resp.status == 201) {
          toast.success("Post created successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          postContextMethods.addPost(resp.data);
        }
      })
      .catch((err) =>
        toast.error("Error occured while creating post", {
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
  return (
    <section className="create-post-section">
      <div className="create-post-form">
        <div className="help-title">
          <h3>Leave us a Post??</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            focusable="false"
            viewBox="0 0 16 16"
            data-testid="Icon--dash"
            data-garden-id="buttons.icon"
            data-garden-version="8.13.0"
            theme="[object Object]"
            class="sc-bwzfXH hDrfMZ"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-strokeWidth="2"
              d="M3 8h10"
            ></path>
          </svg>
        </div>
        <div className="message">
          <label htmlFor="description">
            We are eager to see what you post?
          </label>
          <textarea
            rows="3"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></textarea>
          <span className="error">{formik.errors.post}</span>
        </div>
        <button
          className="btn-send"
          type="submit"
          onClick={formik.handleSubmit}
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default PostForm;

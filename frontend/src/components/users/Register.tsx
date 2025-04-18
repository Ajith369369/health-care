import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_API } from "../../Config";
import { setItemToLocalStorage } from "../../utils/set&Get";
import showToast from "../../utils/toast";
import validateSignUpUser from "../../utils/validationSignup";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      department: "",
      education: "",
      description: "",
      experience: "",
      licenseCertificate: null,
      consultationType: "",
    },
    validate: validateSignUpUser,
    onSubmit: async ({ name, email, password }) => {
      setIsSubmitting(true);
      try {
        const { data } = await axios.post(USER_API + "/register", {
          name,
          email,
          password,
        });
        const { message, accessToken, newUser } = data;
        showToast(message, "success");
        localStorage.setItem("access_token", accessToken);
        setItemToLocalStorage("userId", newUser._id);
        navigate("/user/verify-otp");
      } catch (error: any) {
        const { message } = error.response.data;
        setIsSubmitting(false);
        showToast(message, "error");
      }
    },
  });
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-96 p-8 bg-gray-300 rounded-lg shadow-lg">
          <h2 className="font-extrabold text-blue-900 text-3xl mb-5 ml-28">
            Register
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mr-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500">{formik.errors.name}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mr-2">
                Email:
              </label>
              <input
                type="text"
                id="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mr-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 mr-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-red-500">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
              <Link
                to="/doctor/register"
                className="mt-4 text-sm text-indigo-900 font-semibold hover:text-indigo-500"
              >
                Register as Doctor
              </Link>
            </div>
          </form>

          <p className="mt-2 text-xs text-gray-700 flex justify-center mt-4">
            Already have an account?
            <Link to="/user/login" className="text-blue-500 underline ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;

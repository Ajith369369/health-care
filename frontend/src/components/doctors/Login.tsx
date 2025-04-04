import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DoctorImage from "../../assets/images/doctor1.jpg";
import { DOCTOR_API } from "../../Config";
import { setDoctor } from "../../features/doctors/DoctorSlice";
import { useAppDispatch } from "../../features/store/store";
import showToast from "../../utils/toast";
import validateLogin from "../../utils/validateLogin";

const Login: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLogin,
    onSubmit: ({ email, password }) => {
      setIsSubmitting(true);
      axios
        .post(DOCTOR_API + "/login", { email, password })
        .then(({ data }) => {
          const access_token = data.accessToken;
          const { doctorName: name, role, _id } = data.doctor;
          localStorage.setItem("access_token", access_token);
          showToast(data.message, "success");
          dispatch(
            setDoctor({
              isAuthenticated: true,
              name,
              role,
              id: _id,
            })
          );
          setTimeout(() => {
            navigate("/doctor");
          }, 1000);
        })
        .catch(({ response }) => {
          const { message } = response.data;
          setIsSubmitting(false);
          showToast(message, "error");
        });
    },
  });

  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${DoctorImage})` }}
      >
        <div className="bg-white shadow-lg rounded-lg p-8 mx-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-950">
            Welcome Back!
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Your Password"
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-2 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
          <p className=" mt-3 text-sm text-gray-700 flex justify-center">
            Don't have an account?{" "}
            <Link to="/doctor/register" className="text-blue-900 underline">
              Sign Up
            </Link>
          </p>
          {/* <div className="flex justify-center mt-3">
          <GoogleLogin
            onSuccess={(credentialResponse: any) => {
              const data: {
                doctorName: string;
                email: string;
                picture: string;
                email_verified: boolean;
              } = jwtDecode(credentialResponse?.credential);
              handleGoogleSignIn(data);
            }}
            onError={() => {
              showToast("Google Login Failed", "error");
            }}
          />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;

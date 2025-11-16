import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import api from "../../../api/axios";

import googleLogo from "../../../assets/google-logo.svg.png";
import bgColor from "../../../assets/bg-img6.jpg";

// allow cookies if you later add auto-login after register
axios.defaults.withCredentials = true;

const RegisterPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      userName: Yup.string().required("User name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),

    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const res = await api.post(
          "https://rigby-backend-deployment-824i.onrender.com/api/auth/register",
          {
            username: values.userName,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
          }
        );

        console.log("Registration success:", res.data);

        navigate("/login"); // redirect after successful registration
      } catch (error) {
        if (error.response?.status === 400) {
          setErrors({ server: error.response.data.message });
        } else {
          setErrors({ server: "Registration failed, try again later" });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url(${bgColor})` }}
    >
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl px-8 py-10 w-full max-w-sm sm:max-w-md mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-5 text-gray-800">
          <span className="border-b-4 border-red-500 pb-1">REGIS</span>TER
        </h1>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
          {/* User Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">User Name</label>
            <input
              name="userName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              placeholder="Enter your full name"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.userName && formik.errors.userName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.userName}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter your password"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Re-enter your password"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
            )}
          </div>

          {/* Server Error */}
          {formik.errors.server && (
            <p className="text-red-500 text-center text-sm mt-2">
              {formik.errors.server}
            </p>
          )}

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all disabled:opacity-60"
          >
            {formik.isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Social Signup */}
        <div className="flex flex-col items-center mt-5">
          <h4 className="text-gray-500 mb-2 text-sm font-medium">Or sign up with:</h4>
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => console.log("Google signup clicked")}
              className="border border-gray-300 w-9 h-9 rounded-full flex justify-center items-center bg-white shadow hover:scale-110 transition-transform"
            >
              <img src={googleLogo} alt="Google Logo" className="w-5 h-5" />
            </button>

            <button
              type="button"
              className="w-9 h-9 rounded-full flex justify-center items-center bg-blue-600 shadow hover:scale-110 transition-transform"
            >
              <span className="text-white font-bold text-lg">f</span>
            </button>

            <button
              type="button"
              className="w-9 h-9 rounded-full flex justify-center items-center bg-black shadow hover:scale-110 transition-transform"
            >
              <span className="text-white font-bold text-lg">X</span>
            </button>
          </div>
        </div>

        {/* Already have account */}
        <p className="mt-5 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-red-600 hover:underline font-medium">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
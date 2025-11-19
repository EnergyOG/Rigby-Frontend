import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import bgColor from "../../../assets/bg-img6.jpg";
import googleLogo from "../../../assets/google-logo.svg.png";
import api from "../../../api/axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const res = await api.post("https://rigby-backend-deployment-824i.onrender.com/auth/login", values);
        console.log("Login success:", res.data);
        navigate("/feed"); // redirect after successful login
      } catch (error) {
        if (error.response?.status === 404) {
          setErrors({ server: "No account found with this email" });
        } else if (error.response?.status === 401) {
          setErrors({ server: "Invalid email or password" });
        } else {
          setErrors({ server: "Login failed, try again later" });
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
          <span className="border-b-4 border-red-500 pb-1">LOG</span>IN
        </h1>

        {/* Email/Password Form */}
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
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

          {formik.errors.server && (
            <p className="text-red-500 text-center text-sm mt-2">{formik.errors.server}</p>
          )}

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all disabled:opacity-60"
          >
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Social Sign-in */}
        <div className="flex flex-col items-center mt-5">
          <h4 className="text-gray-500 mb-2 text-sm font-medium">Or sign in with:</h4>
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => console.log("Google login clicked")}
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

        {/* Register link */}
        <p className="mt-5 text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-600 hover:underline font-medium">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
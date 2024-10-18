import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "../supabaseClient";

function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const { email, password } = values;

        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          console.error("Registration error:", error);
          alert(error.message);
        } else {
          alert("Registration successful! Please check your email for confirmation.");
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full py-2 text-sm font-bold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-black font-bold">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
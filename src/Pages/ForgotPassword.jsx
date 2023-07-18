import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import api from "../Helpers/AxiosHelper";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
    };

    api
      .post("/auth/forgot-password", data)
      .then((res) => {
        setSuccessMessage(
          "Password reset email sent. Please check your email."
        );
        setEmail("");
      })
      .catch((err) => {
        setErrorMessage("Email address not found. Please try again.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="logoDiv mb-8">
        <h1 className="logo text-3xl text-blue-500">
          <strong>Job</strong>Portal
        </h1>
      </div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
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
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {successMessage && (
          <p className="text-green-500 text-sm mb-3">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-3">{errorMessage}</p>
        )}
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Reset Password
          </button>
        </div>
        <p className="text-gray-600 text-sm mt-4">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-500">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import api from "../Helpers/AxiosHelper";

const Register = () => {
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [error, setError] = useState("");
  const [formValue, setFormValue] = useState({});
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setError("");
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setError("");
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Check password criteria
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    setIsPasswordValid(passwordRegex.test(value));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      role: role,
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
    };

    api
      .post("/auth/register", newUser)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setError("Registration failed");
      });
  };

  const isRegisterDisabled = () => {
    return (
      !role ||
      !firstName ||
      !lastName ||
      !email ||
      !username ||
      !password ||
      !isPasswordValid ||
      !!error
    );
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
        {/* Role selection */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            I am
          </label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="hiring"
              value="hiring"
              checked={role === "hiring"}
              onChange={handleRoleChange}
            />
            <label htmlFor="hiring" className="ml-2">
              Hiring
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="looking"
              value="looking"
              checked={role === "looking"}
              onChange={handleRoleChange}
            />
            <label htmlFor="looking" className="ml-2">
              Looking for a job
            </label>
          </div>
        </div>
        {/* First name input field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        {/* Last name input field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        {/* Email input field */}
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
        {/* Username input field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        {/* Password input field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              !isPasswordValid ? "border-red-500" : ""
            }`}
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {!isPasswordValid && (
            <p className="text-red-500 text-xs mt-1">
              Password must be at least 8 characters long and include at least
              one uppercase letter, one lowercase letter, and one digit.
            </p>
          )}
        </div>
        {/* Error message */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {/* Submit button */}
        <div className="flex flex-col items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 w-full"
            type="submit"
            disabled={isRegisterDisabled()}
          >
            Register
          </button>
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

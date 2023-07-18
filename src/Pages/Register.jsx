import { useState } from "react";
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
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, role: "" }));
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Check password criteria
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    setIsPasswordValid(passwordRegex.test(value));
    setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Field validation
    const validationErrors = {};
    if (!role) {
      validationErrors.role = "Please select a role";
    }
    if (!firstName) {
      validationErrors.firstName = "Please enter your first name";
    }
    if (!lastName) {
      validationErrors.lastName = "Please enter your last name";
    }
    if (!email) {
      validationErrors.email = "Please enter your email";
    }
    if (!username) {
      validationErrors.username = "Please enter a username";
    }
    if (!password) {
      validationErrors.password = "Please enter a password";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
        setErrors((prevErrors) => ({
          ...prevErrors,
          registration: "Registration failed",
        }));
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
        {/* Role selection */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            I am
          </label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="hiring"
              value="GIVER"
              checked={role === "GIVER"}
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
              value="SEEKER"
              checked={role === "SEEKER"}
              onChange={handleRoleChange}
            />
            <label htmlFor="looking" className="ml-2">
              Looking for a job
            </label>
          </div>
          {errors.role && (
            <p className="text-red-500 text-xs mt-1">{errors.role}</p>
          )}
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
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
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
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
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
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
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
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}
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
              one uppercase letter, one lowercase letter, one digit, and one
              special character.
            </p>
          )}
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        {/* Error message */}
        {errors.registration && (
          <p className="text-red-500 text-sm mb-3">{errors.registration}</p>
        )}
        {/* Submit button */}
        <div className="flex flex-col items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 w-full"
            type="submit"
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

/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import AuthContext from "../Context/AuthProvider";
import api from "../Helpers/AxiosHelper";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formValue, setFormValue] = useState({});
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  useEffect(() => {
    setFormValue({ username, password });
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/auth/login", formValue)
      .then((res) => {
        const jwt = res.data.jwt;
        localStorage.setItem("token", jwt);
        const user = res.data.user;
        setAuth({ user, jwt });
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.body.detail);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="logoDiv mb-8">
        <h1 className="logo text-3xl text-blue-500">
          <Link to="/">
            <strong>Job</strong>Portal
          </Link>
        </h1>
      </div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm w-full"
        onSubmit={handleSubmit}
      >
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
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {/* Error message */}
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <p className="text-blue-500 text-sm mb-4">
            <Link to="/forgot-password">Forgot your password?</Link>
          </p>
        </div>
        {/* Submit button */}
        <div className="flex flex-col items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 w-full"
            type="submit"
          >
            Sign In
          </button>
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

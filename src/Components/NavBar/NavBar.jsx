import { useState } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useAuth } from "../../Context/useAuth";
import { AiOutlineUser, AiOutlineDown, AiFillLock } from "react-icons/ai";

const LoginButt = () => {
  return (
    <>
      <li className="menuList flex items-center text-[#6f6f6f] hover:text-blueColor">
        <AiFillLock className="w-4 h-4 mr-2" />
        <a href="/login">Sign In</a>
      </li>
    </>
  );
};

const LogoutButt = (props) => {
  const { auth, setAuth } = props;
  const logout = () => {
    setAuth({});
    localStorage.removeItem("token");
  };
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="flex items-center text-[#6f6f6f] hover:text-blueColor"
        onClick={toggleDropdown}
      >
        <AiOutlineUser className="w-4 h-4 mr-1" />
        {auth?.user.username}
        <AiOutlineDown className="w-4 h-4 ml-1" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          <a
            href="/applied-jobs"
            className="block px-4 py-2 text-sm text-[#6f6f6f] hover:bg-gray-100 hover:text-blueColor"
          >
            Applied Jobs
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-[#6f6f6f] hover:bg-gray-100 hover:text-blueColor"
            onClick={logout}
          >
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
};

LogoutButt.propTypes = {
  auth: PropTypes.object,
  setAuth: PropTypes.func,
};

const NavBar = () => {
  const { auth, setAuth } = useAuth();
  return (
    <>
      <div className="navBar flex justify-between items-center px-[3rem] pt-[2rem] pb-[1rem]">
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-blueColor">
            <Link to="/">
              <strong>Job</strong>Portal{" "}
            </Link>
          </h1>
        </div>

        <div className="menu text-[18px] flex gap-8">
          {localStorage.getItem("token") ? (
            <LogoutButt auth={auth} setAuth={setAuth} />
          ) : (
            <LoginButt />
          )}
        </div>
      </div>
      <hr className="border-[#e0e0e0]" />
    </>
  );
};

export default NavBar;

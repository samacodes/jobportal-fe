import React from "react";

const LoginButt = () => {
  return (
    <>
      <li className="menuList text-[#6f6f6f] hover:text-blueColor">
        <a href="/login">Log In</a>
      </li>
    </>
  );
};

const LogoutButt = () => {
  const logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <li className="menuList text-[#6f6f6f] hover:text-blueColor">
        <a href="/" onClick={logout}>
          Log Out
        </a>
      </li>
    </>
  );
};

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>Portal{" "}
        </h1>
      </div>

      <div className="menu flex gap-8">
        {localStorage.getItem("token") ? <LogoutButt /> : <LoginButt />}
      </div>
    </div>
  );
};

export default NavBar;

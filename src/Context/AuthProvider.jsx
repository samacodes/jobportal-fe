import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const AuthContext = createContext({});

// Update the setAuth function in AuthProvider to save the state in localStorage
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || {}
  );

  const setAuthAndPersist = (newAuth) => {
    setAuth(newAuth);
    localStorage.setItem("auth", JSON.stringify(newAuth));
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth: setAuthAndPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;

import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/SearchDiv/Search";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <Search />
    </div>
  );
};

export default App;

import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/SearchDiv/Search";
import Jobs from "./Components/JobDiv/Jobs";
import Value from "./Components/ValueDiv/Value";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <Search />
      <Jobs />
      <Value />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [jobQuery, setJobQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [showSorting, setShowSorting] = useState(false);
  const [jobFocus, setJobFocus] = useState(false);
  const [locationFocus, setLocationFocus] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    setShowSorting(true);
    // Redirect to the search page with filters using useNavigate
    navigate(
      `/search?job=${encodeURIComponent(
        jobQuery
      )}&location=${encodeURIComponent(locationQuery)}`
    );
  };

  const handleClearAll = () => {
    setJobQuery("");
    setLocationQuery("");
    setShowSorting(false);
  };

  return (
    <div className="searchDiv px-[3rem] pt-[5rem] flex justify-center">
      <form
        onSubmit={handleSearch}
        className="flex flex-wrap gap-4 justify-center"
      >
        {/* Search by Job */}
        <div
          className={`flex items-center gap-2 border rounded-lg p-2 border-[#555555] text-black text-lg w-[400px] ${
            jobFocus ? "focused" : ""
          }`}
          onFocus={() => setJobFocus(true)}
          onBlur={() => setJobFocus(false)}
        >
          <AiOutlineSearch className="text-[20px] text-blue-500" />
          <input
            type="text"
            placeholder="Search for a job..."
            value={jobQuery}
            onChange={(e) => setJobQuery(e.target.value)}
            className="bg-transparent text-black focus:outline-none w-full"
          />
          {jobQuery && (
            <AiOutlineCloseCircle
              className="text-[20px] text-[#a5a6a6] hover:text-textColor cursor-pointer"
              onClick={() => setJobQuery("")}
            />
          )}
        </div>

        {/* Search by Location */}
        <div
          className={`flex items-center gap-2 border rounded-lg p-2 border-[#555555] text-black text-lg w-[400px] ${
            locationFocus ? "focused" : ""
          }`}
          onFocus={() => setLocationFocus(true)}
          onBlur={() => setLocationFocus(false)}
        >
          <BsHouseDoor className="text-[20px] text-blue-500" />
          <input
            type="text"
            placeholder="Search by location..."
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            className="bg-transparent text-black focus:outline-none w-full"
          />
          {locationQuery && (
            <AiOutlineCloseCircle
              className="text-[20px] text-[#a5a6a6] hover:text-textColor cursor-pointer"
              onClick={() => setLocationQuery("")}
            />
          )}
        </div>

        {/* Search Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[100px]">
          Search
        </button>
      </form>

      {showSorting && (
        <>
          {/* Clear All */}
          <span
            className="mt-4 text-[#a1a1a1] cursor-pointer text-sm"
            onClick={handleClearAll}
          >
            Clear All
          </span>

          {/* Sorting Options */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <label
                htmlFor="sortType"
                className="text-[#808080] font-semibold"
              >
                Sort by:
              </label>
              <select
                id="sortType"
                className="bg-white rounded-[3px] px-3 py-1 text-sm"
              >
                <option value="">Relevance</option>
                <option value="">Date Posted</option>
                <option value="">Salary</option>
              </select>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <label
                htmlFor="sortOrder"
                className="text-[#808080] font-semibold"
              >
                Order:
              </label>
              <select
                id="sortOrder"
                className="bg-white rounded-[3px] px-3 py-1 text-sm"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;

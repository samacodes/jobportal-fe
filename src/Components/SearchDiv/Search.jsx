import { PropTypes } from "prop-types";
import React from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";

const Search = (params) => {
  const { setSearchParams } = params;
  const [jobQuery, setJobQuery] = React.useState("");
  const [locationQuery, setLocationQuery] = React.useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const searchParams = {};
    if (jobQuery) searchParams.job = jobQuery;
    if (locationQuery) searchParams.location = locationQuery;

    setSearchParams(searchParams);
  };

  return (
    <div className="searchDiv px-[3rem] pt-[5rem] flex justify-center">
      <form
        onSubmit={handleSearch}
        className="flex flex-wrap gap-4 justify-center"
      >
        {/* Search by Job */}
        <div
          className={`flex items-center gap-2 border rounded-lg p-2 border-[#555555] text-black text-lg w-[400px]`}
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
              onClick={() => {
                setJobQuery("");
                if (!locationQuery) setSearchParams({});
              }}
            />
          )}
        </div>

        {/* Search by Location */}
        <div
          className={`flex items-center gap-2 border rounded-lg p-2 border-[#555555] text-black text-lg w-[400px]`}
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
              onClick={() => {
                setLocationQuery("");
                if (!jobQuery) setSearchParams({});
              }}
            />
          )}
        </div>

        {/* Search Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[100px]">
          Search
        </button>
      </form>
    </div>
  );
};
Search.propTypes = {
  setSearchParams: PropTypes.func,
};

export default Search;

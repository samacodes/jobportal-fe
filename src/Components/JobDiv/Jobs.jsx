import React from "react";
import { PropTypes } from "prop-types";
import JobCard from "../Partials/JobCard";
import { BsSearch } from 'react-icons/bs';

const Jobs = (props) => {
  const { jobs, searched } = props;

  return (
    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {searched ? (
      jobs.length ? (
        jobs.map((job) => {
          return <JobCard job={job} key={job.id} />;
        })
      ) : (
    <div className="flex flex-col items-center text-center">
      <BsSearch size={48} color="greyIsh" />
      <p className="greyIsh text-xl ml-2">No jobs found! Please adjust your search parameters.</p>
    </div>
      )): (
      <div className="flex items-center justify-center text-center">
            <BsSearch size={48} color="greyIsh" />
            <p className="greyIsh text-xl ml-2">Please search for jobs</p>
          </div>
      )}
    </div>
  );
};
Jobs.propTypes = {
  jobs: PropTypes.array,
  searched: PropTypes.bool,
};

export default Jobs;

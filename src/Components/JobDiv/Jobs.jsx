import React from "react";
import { PropTypes } from 'prop-types';
import JobCard from "../Partials/JobCard";


const Jobs = (props) => {
  const {jobs} = props;

  return (
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          jobs.length ?

          jobs.map((job) => {
            return (
              <JobCard job={job} key={job.id} />
            )
          })
          :
          <div>Please search for jobs</div>
        }
      </div>
  );
};
Jobs.propTypes = {
    jobs: PropTypes.array,
}

export default Jobs;

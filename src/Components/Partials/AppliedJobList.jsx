import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { getTime } from "../../Helpers/GetTime";
import { PropTypes } from "prop-types";

const AppliedJobList = ({ appliedJobs }) => {
  const trimDescription = (description) => {
    if (description.length > 100) {
      return `${description.substring(0, 100)}...`;
    }
    return description;
  };

  return (
    <div
      className="applied-job-list-container"
      style={{ overflowX: "auto", width: "100vw" }}
    >
      {appliedJobs.map((job, index) => (
        <div
          key={index}
          className="group group/item singleJob w-[calc(100vw - 40px)] p-[10px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg
                shadow-greyIsh-400/700 hover:shadow-lg m-2 flex-shrink-0"
          style={{ border: "1px solid #eaeaea", height: "200px" }}
        >
          <div
            className="job-number"
            style={{
              color: "#555",
              marginBottom: "10px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {index + 1}.
          </div>
          <div
            className="job-details"
            style={{
              width: "calc(100% - 40px)",
              overflow: "hidden",
              paddingBottom: "10px",
            }}
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-black group-hover:text-white">
                {job.title}
              </h1>
              <span className="flex items-center text-[#888] gap-1">
                <BiTimeFive />
                {getTime(job.createdAt)}
              </span>
            </span>

            <h6 className="text-[#888]">{job.location}</h6>

            <p
              className="text-[13px] text-[#777] pt-[10px] border-t-[1px] mt-[10px] group-hover:text-white"
              style={{
                maxHeight: "60px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {trimDescription(job.desc)}
            </p>

            <div
              className="company flex items-center justify-between"
              style={{ marginTop: "10px" }}
            >
              <div className="company-details flex items-center gap-2">
                <img
                  src={job.image}
                  alt={job.company}
                  className="w-[50px] h-[50px] object-cover rounded-full"
                />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {job.company}
                </span>
              </div>
              <div
                className="applied-tag"
                style={{ color: "#4CAF50", width: "fit-content" }}
              >
                <span>Applied</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

AppliedJobList.propTypes = {
  appliedJobs: PropTypes.array,
};

export default AppliedJobList;

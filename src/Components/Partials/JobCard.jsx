/* eslint-disable react/prop-types */
import React from "react";
import { BiTimeFive } from "react-icons/bi";
import CustomModal from "./CustomModal";
import { getTime } from "../../Helpers/GetTime";
import api from "../../Helpers/AxiosHelper";

const JobCard = (props) => {
  const { job } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleApplyNow = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }
    const data = {
      job_id: parseInt(job.id),
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    api
      .post("/jobs/apply", data, config)
      .then((res) => {
        console.log(res);
        setIsModalOpen(true);
        job.applied = true;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="group group/item singleJob w-[300px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg
                shadow-greyIsh-400/700 hover:shadow-lg"
      >
        <span className="flex justify-between items-center gap-4">
          <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
            {job.title}
          </h1>
          <span className="flex items-center text-[#ccc] gap-1">
            <BiTimeFive />
            {getTime(job.createdAt)}
          </span>
        </span>

        <h6 className="text-[#ccc]">{job.location}</h6>

        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
          {job.desc}
        </p>

        <div className="company flex items-center gap-2">
          <img
            src={job.image}
            alt={job.company}
            className="w-[50px] h-[50px] object-cover rounded-full"
          />
          <span className="text-[14px] py-[1rem] block group-hover:text-white">
            {job.company}
          </span>
        </div>

        {job.applied ? (
          <button
            className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Applied
          </button>
        ) : (
          <button
            className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-blue-400
                group-hover/item:text-textColor group-hover:text-white"
            onClick={handleApplyNow}
          >
            Apply Now
          </button>
        )}
      </div>

      <CustomModal
        isModalOpen={isModalOpen}
        title={job.title}
        detail={job.desc}
        closeModal={closeModal}
      />
    </>
  );
};

export default JobCard;

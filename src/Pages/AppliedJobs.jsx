import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import api from "../Helpers/AxiosHelper";
import AppliedJobList from "../Components/Partials/AppliedJobList";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("token", token);
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await api.get("/jobs/applied", config);
        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="w-full m-auto bg-white">
      <NavBar />
      <AppliedJobList appliedJobs={jobs} />
    </div>
  );
};

export default AppliedJobs;

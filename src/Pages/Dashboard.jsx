import React, { useEffect } from "react";
import axios from "axios";

import Search from "../Components/SearchDiv/Search";
import Jobs from "../Components/JobDiv/Jobs";
import Value from "../Components/ValueDiv/Value";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer";

// Logos
import logo1 from "../Assets/BushaWallet.png";
import logo2 from "../Assets/Fincra.png";
import logo3 from "../Assets/ScaleFocus.png";
import logo4 from "../Assets/TezosCoin.png";
import logo5 from "../Assets/Zoho.png";

const jobs = [
  {
    id: 1,
    image: logo1,
    title: "Software Engineer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    company: "Busha Wallet",
  },
  {
    id: 2,
    image: logo2,
    title: "Web Developer",
    time: "12Hrs",
    location: "USA",
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    company: "Fincra",
  },
  {
    id: 3,
    image: logo3,
    title: "UI/UX Designer",
    time: "24Hrs",
    location: "Hamburg",
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    company: "Scale Focus",
  },
  {
    id: 4,
    image: logo4,
    title: "Project Manager",
    time: "2Days",
    location: "Paris",
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    company: "Tezos Coin",
  },
  {
    id: 5,
    image: logo5,
    title: "Data Scientist",
    time: "2Days",
    location: "New York",
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    company: "Zoho",
  },
  {
    id: 6,
    image: logo5,
    title: "Data Scientist",
    time: "2Days",
    location: "New York",
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    company: "Zoho",
  },
  {
    id: 7,
    image: logo5,
    title: "Data Scientist",
    time: "2Days",
    location: "New York",
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    company: "Zoho",
  },
];

const Dashboard = () => {
  const [jobData, setJobData] = React.useState([]);
  const [searchParams, setSearchParams] = React.useState({});
  const [searchPressed, setSearchPressed] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    console.log("searchParams", searchParams);

    const fetchJobData = async () => {
      setLoading(true);

      try {
        const response = await axios.get("http://localhost:8000/jobs", {
          params: searchParams,
        });
        setJobData(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchJobData();
  }, [searchParams]);

  return (
    <div className="w-full m-auto bg-white">
      <NavBar />
      <Search setSearchParams={setSearchParams} setSearchPressed={setSearchPressed} searchPressed={searchPressed} />
      <Jobs jobs={jobData} searched={searchPressed} />
      {searchPressed && jobData.length ? null : <Value />}
      <Footer />
    </div>
  );
};

export default Dashboard;

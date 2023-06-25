import React from "react";

// Icons
import { BiTimeFive } from "react-icons/bi";

// Logos
import logo1 from "../../Assets/BushaWallet.png";
import logo2 from "../../Assets/Fincra.png";
import logo3 from "../../Assets/ScaleFocus.png";
import logo4 from "../../Assets/TezosCoin.png";
import logo5 from "../../Assets/Zoho.png";

const Data = [
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
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg
              shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>

              <h6 className="text-[#ccc]">{location}</h6>

              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt={company} className="w-[20%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button
                className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-blue-400
                group-hover/item:text-textColor group-hover:text-white"
              >
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;

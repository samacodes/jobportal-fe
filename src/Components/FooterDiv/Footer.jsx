import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer bg-blueColor rounded-[10px] py-8 px-4 md:px-8 lg:px-12 xl:px-16 flex flex-row items-center justify-between">
      <div className="flex flex-col items-center md:items-start mb-6">
        <div className="logoDiv mb-2">
          <h1 className="logo text-2xl text-white">
            <strong>Job</strong>Portal
          </h1>
        </div>
        <p className="text-white opacity-70 leading-7">
          Explore Opportunities, Unlock Your Potential
        </p>
        <p className="text-white opacity-70 leading-7">
          &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
        </p>
      </div>

      <div className="col-span-2 flex justify-center md:justify-end items-center">
        <span className="divTitle text-xl font-semibold text-white">
          Made with{" "}
          <svg
            style={{
              color: "red",
              height: "1em",
              width: "1em",
              marginRight: "0.2em",
              display: "inline-block",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              fill="red"
            ></path>
          </svg>
          in Nepal
        </span>
      </div>

      <div className="grid">
        <div className="col-span-1">
          <span className="divTitle text-xl font-semibold text-white">
            Contact Info
          </span>
          <div>
            <small className="text-white text-sm">
              <a
                href="mailto:sama.acharya@smc.edu.np"
                className="text-white hover:text-blueColor"
              >
                sama.acharya@smc.edu.np
              </a>
            </small>
            <div className="icons flex gap-4 py-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="bg-white p-2 h-10 w-10 rounded-full icon text-blueColor" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="bg-white p-2 h-10 w-10 rounded-full icon text-blueColor" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter className="bg-white p-2 h-10 w-10 rounded-full icon text-blueColor" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

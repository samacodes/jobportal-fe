import React from "react";

import logo6 from "../../Assets/Sphere.png";
import logo8 from "../../Assets/SEMRush.png";
import logo9 from "../../Assets/Dogecoin.png";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that holds us true to the account
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo6} alt="" className="w-[90%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Sphere
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] ">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo8} alt="" className="w-[90%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              SEMRush
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] ">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo9} alt="" className="w-[90%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Dogecoin
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] ">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;

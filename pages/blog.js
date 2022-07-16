import React from "react";
import { Fade } from "react-reveal";
import Cards from "../constants/Cards";

function blog() {
  return (
    <Fade>
      <div className="flex justify-center mt-20 items-center">
        <div className="max-w-[500px] flex-col flex justify-center items-center">
          <div>
            <h1 className="text-white text-center text-4xl font-bold">
              SOMETHING AWESOME IS COMING SOON
            </h1>
            <p className="text-[#c5c5c5] text-sm text-center mt-6">
              Your all-in-one affliate marketing tracking software{" "}
              <span className="font-semibold text-white">track,automate </span> and{" "}
              <span className="font-semibold text-white">optimize</span> your campaigns
            </p>
          </div>
          <div className="grid grid-cols-4 relative right-[30px] my-6 gap-16 max-w-[300px]">
            <Cards className={"rounded-md bg-[#ffffff] p-2 w-[80px] text-center"} text1={"7"} text2={"Days"} />
            <Cards className={"rounded-md bg-[#ffffff] p-2 w-[80px] text-center"} text1={"24"} text2={"Hours"} />
            <Cards className={"rounded-md bg-[#ffffff] p-2 w-[80px] text-center"} text1={"54"} text2={"Minutes"} />
            <Cards className={"rounded-md bg-[#ffffff] p-2 w-[80px] text-center"} text1={"11"} text2={"Seconds"} />
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default blog;

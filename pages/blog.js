import React from "react";
import { Fade } from "react-reveal";
import Btn from "../constants/Btn";
import Cards from "../constants/Cards";
import {AiFillYoutube,AiFillInstagram} from "react-icons/ai";
import {FaFacebookSquare,FaLinkedin,FaTwitterSquare} from "react-icons/fa";
import Footer from "../components/Footer";

function blog() {
  return (
    <Fade>
      <div className="rounder"></div>
      <div className="rounder2"></div>
      <div className="rounder3"></div>
      <div className="flex justify-center mt-20 items-center">
        <div className="lg:max-w-[500px] flex-col flex justify-center items-center">
          <div className="w-[80%] lg:w-full">
            <h1 className="text-white text-center lg:text-4xl font-bold">
              SOMETHING AWESOME IS COMING SOON
            </h1>
            <p className="text-[#c5c5c5] text-sm text-center mt-6">
              Your all-in-one affliate marketing tracking software{" "}
              <span className="font-semibold text-white">track,automate </span>{" "}
              and <span className="font-semibold text-white">optimize</span>{" "}
              your campaigns
            </p>
          </div>
          <div className="grid grid-cols-4 relative right-[30px] my-6 gap-16 max-w-[300px]">
            <Cards
              className={"rounded-md bg-[#ffffff] p-2 w-[80px] text-center"}
              text1={"7"}
              text2={"Days"}
            />
            <Cards
              className={"rounded-md bg-[#ffffff] p-2 w-[80px] text-center"}
              text1={"24"}
              text2={"Hours"}
            />
            <Cards
              className={"rounded-md bg-[#ffffff] p-2 w-[80px] text-center"}
              text1={"54"}
              text2={"Minutes"}
            />
            <Cards
              className={"rounded-md bg-[#ffffff] p-2 w-[80px] text-center"}
              text1={"11"}
              text2={"Seconds"}
            />
          </div>
          <div>
            <div className="flex space-x-2 lg:space-x-8 ">
              <input
                type="text"
                className="bg-transparent w-[160px] lg:w-full border-b-2 border-[#3c3246] focus:outline-none  h-12 lg:px-4 text-left text-white"
                placeholder="First Name.."
              />
              <input
                type="text"
                className="bg-transparent w-[160px] lg:w-full border-[#3c3246]   border-b-2 focus:outline-none lg:h-12 px-4 text-left text-white"
                placeholder="Last Name.."
              />
            </div>
            <div className=" flex my-8 relative ">
              <input
                className="rounded-full w-[95%] bg-white border-none py-2 text-black px-7"
                placeholder="Enter your email address..."
              />
              <div>
                {" "}
                <Btn
                  className={
                    "text-white cursor-pointer font-semibold absolute left-[39%] lg:left-[58%] text-[12px]  rounded-full bg-[#2323da] py-3 px-7"
                  }
                  text={"JOIN OUR WAITING LIST"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex justify-center items-center">

        <div className="relative top-[60px] fter lg:top-[200px]">
          <div className="flex space-x-5">
            <AiFillYoutube className="text-[#dadada] text-2xl"/>
            <FaFacebookSquare className="text-[#bdbdbd] h-5 mt-[2px] text-xl"/>
            <FaLinkedin className="text-[#bdbdbd] h-5 mt-[2px] text-xl"/>
            <AiFillInstagram className="text-[#dadada] text-2xl"/>
            <FaTwitterSquare className="text-[#bdbdbd] h-5 mt-[2px] text-xl"/>
          </div>
          <div className="flex space-x-10">
            <small className="text-[#979797] ">Terms of service</small>
            <small className="text-[#979797]">Privacy Policy</small>
          </div>
          <small className="text-[#979797] ">Copyright © 2022 Peddle Technologies</small>
        </div>

        <Footer />
      </div>
    </Fade>
  );
}

export default blog;

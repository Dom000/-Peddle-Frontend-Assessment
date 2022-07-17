import React from "react";
import Btn from "../constants/Btn";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal, Group } from "@mantine/core";
import { Fade } from "react-reveal";

function Header() {
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Fade>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          overlayOpacity={0.55}
          overlayBlur={3}
        >
          <div className="rounder4 -z-10"></div>

          <div className="flex flex-col z-30 mt-20 justify-center items-center">
            <p className="font-semibold text-2xl my-10 text-white text-center">
              Hey,We are still in the works, but you can send us a message!
            </p>
            <div>
              <div className="w-[400px]">
                <label className="text-white ">first Name</label>
                <br />
                <input placeholder="Enter your first name..." type={"text"} className=" p-4  my-3 rounded-md w-full" />
              </div>
              <div className="w-[400px]">
                <label className="text-white ">flast Name</label>
                <br />
                <input placeholder="Enter your last name..." type={"text"} className=" p-4  my-3 rounded-md w-full" />
              </div>
              <div className="w-[400px]">
                <label className="text-white ">Email Address</label>
                <br />
                <input type={"text"} placeholder="Enter your Email address..." className=" p-4  my-3 rounded-md w-full" />
              </div>
              <div className="w-[400px]">
                <label className="text-white ">
                  Tell us with you need with it
                </label>
                <br />
                <input
                placeholder="Enter a topic like , 'channel problem'..."
                  type={"text"}
                  className=" p-4 h-20 my-3 rounded-md w-full"
                />
              </div>
              <Btn
                onClick={() => setOpened(true)}
                className={
                  "text-white text-center w-44 font-semibold mt-2 cursor-pointer text-[12px] rounded-full bg-[#2323da] py-4 px-4"
                }
                text={"SEND NOW"}
              />
            </div>
          </div>
        </Modal>
      </Fade>
      <div className="flex justify-between px-10 py-4">
        <div className="bg-transparent">
          <img className="w-20" src="/image.png" alt="logo" />
        </div>

        <div className="flex justify-between w-[25%]">
          <div className="flex justify-between mt-2 w-[40%] ">
            <p
              onClick={() => router.push("/")}
              className="text-white cursor-pointer text-sm"
            >
              ABOUT US
            </p>
            <p
              onClick={() => router.push("/blog")}
              className="text-white cursor-pointer text-sm"
            >
              BLOG
            </p>
          </div>
          <div>
            <Btn
              onClick={() => setOpened(true)}
              className={
                "text-white font-semibold cursor-pointer text-[12px] rounded-full bg-[#2323da] py-2 px-4"
              }
              text={"CONTACT US"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

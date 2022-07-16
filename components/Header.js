import React from "react";
import Btn from "../constants/Btn";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <div className="flex justify-between px-10 py-4">
      <div className="bg-transparent">
        <img className="w-20" src="/image.png" alt="logo" />
      </div>

      <div className="flex justify-between w-[25%]">
        <div className="flex justify-between mt-2 w-[40%] ">
          <p onClick={()=>router.push("/")} className="text-white cursor-pointer text-sm">ABOUT US</p>
          <p onClick={()=>router.push("/blog")} className="text-white cursor-pointer text-sm">BLOG</p>
        </div>
        <div>
          <Btn className={"text-white font-semibold text-[12px] rounded-full bg-[#2323da] py-2 px-4"} text={"CONTACT US"}/>
        </div>
      </div>
    </div>
  );
}

export default Header;

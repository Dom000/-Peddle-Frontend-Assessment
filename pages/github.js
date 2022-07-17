import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import Btn from "../constants/Btn";

import axios from "axios";
import { TablePagination } from "@mui/material";

function github() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [disabled, setDisabled] = useState(false);

 

  useEffect(() => {
    if (pages === 1) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc&page=${pages}`
      )
      .then((res) => {
        setData(res.data.items);
        console.log(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pages]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Fade>
      <div className="px-5 md:px-10 lg:px-20 mt-9">
        <div className="rounder -z-10"></div>
        <div className="rounder2 -z-10"></div>
        <div className="rounder3 -z-10"></div>
        {data
          ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item, index) => (
            <div
              key={index}
              className=" md:flex lg:flex bg-white shadow-md border my-5 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-5"
            >
              <div className="mr-6">
                <img
                  className=" w-full md:w-32 lg:w-32 rounded "
                  src={item.owner?.avatar_url}
                  alt="avatar"
                />
              </div>
              <div>
                <h1 className="text-3xl text-white italic font-semibold">
                  {item.name}
                </h1>
                <p className="text-white italic">
                  {item.description?.substring(0, 300) + ".."}
                </p>
                <div className="flex space-x-3 mt-6">
                  <Btn
                    className={
                      "text-white rounded cursor-pointer font-semibold  text-[12px]   bg-[#2323da] py-2 px-7"
                    }
                    text={`stars: ${item.stargazers_count}`}
                  />
                  <Btn
                    className={
                      "text-white rounded cursor-pointer font-semibold   text-[12px]   bg-[#2323da] py-2 px-7"
                    }
                    text={`issues: ${item.open_issues}`}
                  />
                  <p className="text-white hidden md:block lg:block italic">{`last updated at ${item.updated_at} by ${item.name}`}</p>
                </div>
              </div>
            </div>
          ))}
        <div className=" blocl md:hidden lg:hidden flex w-full justify-between my-7 pb-1 bg-white px-5 rounded-md">
          <div>
            <Btn
              onClick={() => {
                disabled ? null : setPages(pages - 1);
              }}
              className={
                "text-white mt-3 hidden  rounded cursor-pointer font-semibold  text-[12px]   bg-[#2323da] py-2 px-7"
              }
              text={`Previous`}
            />
          </div>

          <TablePagination
            className="padding-4 block md:hidden lg:hidden overflow-hidden w-[100%] lg:w-[300px] my-1 rounded-md bg-white font-bold"
            rowsPerPageOptions={[10, 20, 30]}
            component="div"
            count={data?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <div className="font-bold hidden mt-4">Page: {pages}</div>
          <div>
            <Btn
              onClick={() => setPages(pages + 1)}
              className={
                "text-white hidden rounded mt-3 cursor-pointer font-semibold   text-[12px]   bg-[#2323da] py-2 px-7"
              }
              text={`Next `}
            />
          </div>
        </div>
        <div className=" flex w-full justify-between my-7 pb-1 bg-white px-5 rounded-md">
          <div>
            <Btn
              onClick={() => {
                disabled ? null : setPages(pages - 1);
              }}
              className={
                "text-white mt-3 rounded cursor-pointer font-semibold  text-[12px]   bg-[#2323da] py-2 px-7"
              }
              text={`Previous`}
            />
          </div>

          <TablePagination
            className="padding-4 hidden md:block lg:block overflow-hidden w-[100%] lg:w-[300px] my-1 rounded-md bg-white font-bold"
            rowsPerPageOptions={[10, 20, 30]}
            component="div"
            count={data?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <div className="font-bold mt-4">Page: {pages}</div>
          <div>
            <Btn
              onClick={() => setPages(pages + 1)}
              className={
                "text-white rounded mt-3 cursor-pointer font-semibold   text-[12px]   bg-[#2323da] py-2 px-7"
              }
              text={`Next `}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default github;

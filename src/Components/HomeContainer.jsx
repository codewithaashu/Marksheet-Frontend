import React, { useEffect, useState } from "react";
import TableContainer from "./TableContainer";
import axios from "axios";
import ErrorToast from "../utility/ErrorToast";

const HomeContainer = ({ course }) => {
  const [data, setData] = useState(null);
  const cols =
    localStorage.getItem("userType") === "Super Admin"
      ? [
          {
            accessorKey: "regNo",
            header: "Reg. No.",
            size: 150,
          },
          {
            accessorKey: "rollNo",
            header: "Roll No.",
            size: 150,
          },
          {
            accessorKey: "name",
            header: "Name",
            size: 200,
          },
          {
            accessorKey: "dob",
            header: "DOB",
            size: 150,
          },
          {
            accessorKey: "adminUsername",
            header: "Admin",
            size: 200,
          },
          {
            accessorKey: "regDate",
            header: "Reg. Date",
            size: 150,
          },
        ]
      : [
          {
            accessorKey: "regNo",
            header: "Reg. No.",
            size: 150,
          },
          {
            accessorKey: "rollNo",
            header: "Roll No.",
            size: 150,
          },
          {
            accessorKey: "name",
            header: "Name",
            size: 200,
          },
          {
            accessorKey: "dob",
            header: "DOB",
            size: 150,
          },
          {
            accessorKey: "regDate",
            header: "Reg. Date",
            size: 150,
          },
        ];
  useEffect(() => {
    getStudentsList();
    //eslint-disable-next-line
  }, [course]);
  const getStudentsList = async () => {
    try {
      let resp;
      if (localStorage.getItem("userType") === "Super Admin") {
        resp = await axios.get(
          `${process.env.REACT_APP_SERVER_BASE_URL}/api/student?course=${course}`
        );
      } else {
        resp = await axios.get(
          `${
            process.env.REACT_APP_SERVER_BASE_URL
          }/api/student?course=${course}&&username=${localStorage.getItem(
            "username"
          )}`
        );
      }
      setData(resp.data.data);
    } catch (err) {
      ErrorToast("Server Error. Try again later!");
    }
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-lg font-semibold text-gray-600">{`Students (${course})`}</h1>
      {data ? (
        <div className="pt-3">
          <TableContainer
            data={data}
            cols={cols}
            isResult={false}
            field={"student"}
            setData={setData}
          />
        </div>
      ) : (
        <div className="self-center py-10">
          <span className="loading loading-spinner loading-lg bg-blue"></span>
        </div>
      )}
    </div>
  );
};

export default HomeContainer;

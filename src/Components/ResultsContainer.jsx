import React, { useEffect, useState } from "react";
import TableContainer from "./TableContainer";
import axios from "axios";
import ErrorToast from "../utility/ErrorToast";

const ResultsContainer = () => {
  const [data, setData] = useState(null);
  const cols = [
    {
      accessorKey: "regNo",
      header: "Reg. No.",
      size: 200,
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
  ];

  useEffect(() => {
    getResultsList();
  }, []);
  const getResultsList = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/result`
      );
      setData(data);
    } catch (err) {
      ErrorToast("Server Error. Try again later!");
    }
  };
  return (
    <div className="p-5 flex flex-col gap-5 max-h-svh">
      <h1 className="text-lg font-semibold text-gray-600">Results</h1>
      {data ? (
        <div className="pt-3">
          <TableContainer
            data={data}
            cols={cols}
            isResult={true}
            field={"result"}
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

export default ResultsContainer;

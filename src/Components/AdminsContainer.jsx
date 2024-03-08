import React, { useEffect, useState } from "react";
import TableContainer from "./TableContainer";
import axios from "axios";
import ErrorToast from "../utility/ErrorToast";

const AdminsContainer = () => {
  const [data, setData] = useState(null);
  const cols = [
    {
      accessorKey: "username", //normal accessorKey
      header: "Username",
      size: 200,
    },
    {
      accessorKey: "name",
      header: "Name",
      size: 200,
    },
    {
      accessorKey: "email",
      header: "Email",
      size: 200,
    },
    {
      accessorKey: "password",
      header: "Password",
      size: 200,
    },
  ];
  useEffect(() => {
    getAdminsList();
  }, []);
  const getAdminsList = async () => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/admin`
      );
      setData(resp.data.data);
    } catch (err) {
      ErrorToast("Server Error. Try again later!");
    }
  };
  return (
    <div className="p-5 flex flex-col gap-5 h-screen">
      <h1 className="text-lg font-semibold text-gray-600">Admins</h1>
      {data ? (
        <div className="pt-3">
          <TableContainer
            data={data}
            cols={cols}
            isResult={false}
            field={"admin"}
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

export default AdminsContainer;

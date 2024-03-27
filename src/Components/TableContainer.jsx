import { useMemo, useRef, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewIcon from "@mui/icons-material/RemoveRedEye";
import ErrorToast from "../utility/ErrorToast";
import axios from "axios";
import SuccessToast from "../utility/SuccesToast";
import AdminModalContainer from "./AdminModalContainer";
import StudentModalContainer from "./StudentModalContainer";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useReactToPrint } from "react-to-print";
import Marksheet from "../Certificates/Marksheet";
import AdmitCard from "../Certificates/AdmitCard";
import Certificate from "../Certificates/Certificate";
import Migration from "../Certificates/Migration";
import Registration from "../Certificates/Registration";

const TableContainer = ({ data, cols, field, setData }) => {
  const columns = useMemo(() => cols, [cols]);
  const [printData, setPrintData] = useState(null);
  const [documentName, setDocumentName] = useState("Marksheet");
  const [formData, setFormData] = useState({
    imgSrc: "",
    name: "",
    dob: "",
    fatherName: "",
    motherName: "",
    year: "",
    course: "",
    stream: "",
    firstLanguage: "",
    secondLanguage: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  });
  const handleEditBtn = (row) => {
    document.getElementById("my_modal_4").showModal();
    setFormData(row);
  };

  const handleToggleBtn = async (row) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/student/${row._id}`,
        {
          ...row,
          modeOfResult: row.modeOfResult === "Online" ? "Offline" : "Online",
        }
      );
      setData(data.data);
      SuccessToast(data.message);
      //window.location.reload();
      return data;
    } catch (err) {
      ErrorToast("Server Error. Try Again");
    }
  };
  const handleAfterPrintDocument = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className=" py-3 bg-blue text-white rounded-md shadow-md flex flex-col w-[360px]">
            <h1 className="text-xl font-semibold pb-2 border-b-[1px] border-gray-50 px-3">
              Printing Confirmation
            </h1>
            <div className="py-3 flex flex-col gap-10 px-10">
              <p>Did you print this document?</p>
              <div className="flex flex-row gap-5 self-end">
                <button
                  className="bg-white text-black px-5 py-2 rounded-sm"
                  onClick={() => {
                    onClose();
                    window.location.reload();
                  }}
                >
                  No
                </button>
                <button
                  className="bg-red-500 text-white px-5 py-2 rounded-sm"
                  onClick={async () => {
                    try {
                      const { data } = await axios.patch(
                        `${process.env.REACT_APP_SERVER_BASE_URL}/api/student/${id}`
                      );
                      setData(data.data);
                      if (data.success) {
                        SuccessToast(data.message);
                        window.location.reload();
                      } else {
                        ErrorToast(data.message);
                      }
                      onClose();
                    } catch (err) {
                      ErrorToast("Server Error");
                    }
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        );
      },
    });
  };
  const handleDeleteBtn = async ({ _id }) => {
    try {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className="w-full py-3 bg-blue text-white rounded-md shadow-md flex flex-col">
              <h1 className="text-xl font-semibold pb-2 border-b-[1px] border-gray-50 px-3">
                Delete Confirmation
              </h1>
              <div className="py-3 flex flex-col gap-10 px-10">
                <p>Are you sure you want to delete this user?</p>
                <div className="flex flex-row gap-5 self-end">
                  <button
                    className="bg-white text-black px-3 py-2 rounded-sm"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded-sm"
                    onClick={async () => {
                      const { data } = await axios.delete(
                        `${process.env.REACT_APP_SERVER_BASE_URL}/api/${field}/${_id}`
                      );
                      setData(data.data);
                      SuccessToast(data.message);
                      onClose();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        },
      });
    } catch (err) {
      ErrorToast("Server Error. Try again later!");
    }
  };
  const marksheetRef = useRef();
  const admitCardRef = useRef();
  const certificateRef = useRef();
  const migrationRef = useRef();
  const registrationRef = useRef();
  const handlePrintDocument = useReactToPrint({
    documentTitle: formData.certificateType ?? "Certificate",
    content: () => {
      if (documentName === "Marksheet") {
        return marksheetRef.current;
      } else if (documentName === "AdmitCard") {
        return admitCardRef.current;
      } else if (documentName === "Certificate") {
        return certificateRef.current;
      } else if (documentName === "Migration") {
        return migrationRef.current;
      }
      return registrationRef.current;
    },
    onAfterPrint: () => {
      handleAfterPrintDocument(printData._id);
    },
  });

  const handleViewBtn = (arg, documentName) => {
    setPrintData(arg);
    setDocumentName(documentName);
    handlePrintDocument();
  };
  const modalOpen = () => {
    if (field === "admin") {
      return (
        <AdminModalContainer
          formData={formData}
          setFormData={setFormData}
          setData={setData}
        />
      );
    } else {
      return (
        <StudentModalContainer
          formData={formData}
          setFormData={setFormData}
          setData={setData}
        />
      );
    }
  };
  const table = useMaterialReactTable({
    columns,
    data,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableHiding: false,
    enableEditing:
      localStorage.getItem("userType") === "Super Admin" ? true : false,
    getRowId: (row) => row.id,
    muiTableContainerProps: {
      sx: {
        maxHeight: "400px",
        minHeight: "360px",
        maxWidth: "80vw",
        overflowX: "scroll",
        scrollbarWidth: "none",
      },
    },
    enableStickyHeader: true,
    enableStickyFooter: true,
    muiTableBodyRowProps: { hover: false },
    muiTableProps: {
      sx: {
        padding: "10px 15px",
      },
    },
    muiTableHeadCellProps: {
      sx: {
        fontWeight: "bold",
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
      },
    },
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "0.5rem" }}>
        <Tooltip title="Edit">
          <IconButton
            onClick={() => handleEditBtn(row.original)}
            color="primary"
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            color="error"
            onClick={() => handleDeleteBtn(row.original)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        {field === "student" && (
          <>
            {row.original?.modeOfResult === "Online" ? (
              <Tooltip title="Online">
                <IconButton
                  onClick={() => handleToggleBtn(row.original)}
                  color="success"
                >
                  <ToggleOnIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Offline">
                <IconButton
                  onClick={() => handleToggleBtn(row.original)}
                  color="default"
                >
                  <ToggleOffIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="View Marksheet">
              <IconButton
                onClick={() => handleViewBtn(row.original, "Marksheet")}
                color="success"
              >
                <ViewIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Admit Card">
              <IconButton
                onClick={() => handleViewBtn(row.original, "AdmitCard")}
                color="success"
              >
                <ViewIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Certificate">
              <IconButton
                onClick={() => handleViewBtn(row.original, "Certificate")}
                color="success"
              >
                <ViewIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Migration">
              <IconButton
                onClick={() => handleViewBtn(row.original, "Migration")}
                color="success"
              >
                <ViewIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Registration">
              <IconButton
                onClick={() => handleViewBtn(row.original, "Registration")}
                color="success"
              >
                <ViewIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Box>
    ),
  });
  return (
    <>
      <MaterialReactTable table={table} />
      {modalOpen()}
      {printData && (
        <div style={{ display: "none" }}>
          <Marksheet ref={marksheetRef} data={printData} />
          <AdmitCard ref={admitCardRef} data={printData} />
          <Certificate ref={certificateRef} data={printData} />
          <Migration ref={migrationRef} data={printData} />
          <Registration ref={registrationRef} data={printData} />
        </div>
      )}
    </>
  );
};
export default TableContainer;

import { useMemo, useRef, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewIcon from "@mui/icons-material/RemoveRedEye";
import ResultModalContainer from "./ResultModalContainer";
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
  const [rowData, setRowData] = useState(null);
  const handleEditBtn = (row) => {
    document.getElementById("my_modal_4").showModal();
    if (field === "result") {
      setFormData(row.result);
      setRowData(row);
    } else {
      setFormData(row);
    }
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
    onAfterPrint: () => window.location.reload(),
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
    } else if (field === "result") {
      return (
        <ResultModalContainer
          formData={formData}
          setFormData={setFormData}
          setData={setData}
          rowData={rowData}
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
    enableEditing: true,
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
          <IconButton onClick={() => handleEditBtn(row.original)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        {localStorage.getItem("userType") === "Super Admin" &&
          field === "student" && (
            <>
              <Tooltip title="View Marksheet">
                <IconButton
                  onClick={() => handleViewBtn(row.original, "Marksheet")}
                >
                  <ViewIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="View Admit Card">
                <IconButton
                  onClick={() => handleViewBtn(row.original, "AdmitCard")}
                >
                  <ViewIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="View Certificate">
                <IconButton
                  onClick={() => handleViewBtn(row.original, "Certificate")}
                >
                  <ViewIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="View Migration">
                <IconButton
                  onClick={() => handleViewBtn(row.original, "Migration")}
                >
                  <ViewIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="View Registration">
                <IconButton
                  onClick={() => handleViewBtn(row.original, "Registration")}
                >
                  <ViewIcon />
                </IconButton>
              </Tooltip>
            </>
          )}
        {field === "student" || (
          <Tooltip title="Delete">
            <IconButton
              color="error"
              onClick={() => handleDeleteBtn(row.original)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
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

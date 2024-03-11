import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StudentsList from "./Pages/StudentsList";
import StudentRegistration from "./Pages/StudentRegistration";
import Results from "./Pages/Results";
import ChangePassword from "./Pages/ChangePassword";
import Admins from "./Pages/Admins";
import CreateAdmin from "./Pages/CreateAdmin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PrintDocument from "./Pages/PrintDocument";
import Home from "./Pages/Frontend/Home";
import History from "./Pages/Frontend/History";
import Welcome from "./Pages/Frontend/Welcome";
import ChairmanMessage from "./Pages/Frontend/ChairmanMessage";
import AimsObjective from "./Pages/Frontend/AimsObjective";
import WorkPlan from "./Pages/Frontend/WorkPlan";
import Examination from "./Pages/Frontend/Examination";
import Reservation from "./Pages/Frontend/Reservation";
import Media from "./Pages/Frontend/Media";
import HighSchool from "./Pages/Frontend/HighSchool";
import Intermediate from "./Pages/Frontend/Intermediate";
import ContactUs from "./Pages/Frontend/ContactUs";
import GovtCertificate from "./Pages/Frontend/GovtCertificate";
import NotificationLetters from "./Pages/Frontend/NotificationLetters";
import HallTicket from "./Pages/Frontend/HallTicket";
import Result from "./Pages/Frontend/Result";
import VerifyRegistration from "./Pages/Frontend/VerifyRegistration";
const root = ReactDOM.createRoot(document.getElementById("root"));
const userType = localStorage.getItem("userType");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/chairmanMessage",
    element: <ChairmanMessage />,
  },
  {
    path: "/aims&Objective",
    element: <AimsObjective />,
  },
  {
    path: "/workplan",
    element: <WorkPlan />,
  },
  {
    path: "/examination",
    element: <Examination />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/media",
    element: <Media />,
  },
  {
    path: "/highSchool",
    element: <HighSchool />,
  },
  {
    path: "/intermediate",
    element: <Intermediate />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/govtCertificate",
    element: <GovtCertificate />,
  },
  {
    path: "/notification-letters",
    element: <NotificationLetters />,
  },
  {
    path: "/hallTicket",
    element: <HallTicket />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/verify",
    element: <VerifyRegistration />,
  },
  {
    path: "/admin",
    element: <App />,
  },
  {
    path: "/admin/users/:id",
    element: userType ? <StudentsList /> : <App />,
  },
  {
    path: "/admin/admins",
    element: userType ? <Admins /> : <App />,
  },
  {
    path: "/admin/createAdmin",
    element: userType ? <CreateAdmin /> : <App />,
  },
  {
    path: "/admin/studentRegistration",
    element: userType ? <StudentRegistration /> : <App />,
  },
  {
    path: "/admin/results",
    element: userType ? <Results /> : <App />,
  },
  {
    path: "/admin/printDocuments",
    element: userType ? <PrintDocument /> : <App />,
  },
  {
    path: "/admin/changePassword",
    element: userType ? <ChangePassword /> : <App />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);

reportWebVitals();

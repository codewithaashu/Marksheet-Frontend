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
const root = ReactDOM.createRoot(document.getElementById("root"));
const userType = localStorage.getItem("userType");
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users/:id",
    element: userType ? <StudentsList /> : <App />,
  },
  {
    path: "/admins",
    element: userType ? <Admins /> : <App />,
  },
  {
    path: "/createAdmin",
    element: userType ? <CreateAdmin /> : <App />,
  },
  {
    path: "/studentRegistration",
    element: userType ? <StudentRegistration /> : <App />,
  },
  {
    path: "/results",
    element: userType ? <Results /> : <App />,
  },
  {
    path: "/printDocuments",
    element: userType ? <PrintDocument /> : <App />,
  },
  {
    path: "/changePassword",
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

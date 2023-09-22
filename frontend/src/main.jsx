import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import Instructors from "./routes/Instructors";
import ClassesPrices from "./routes/ClassesPrices";
import JoinContact from "./routes/JoinContact";
import Instructor from "./components/Instructor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes-prices",
        element: <ClassesPrices />,
      },
      {
        path: "contact",
        element: <JoinContact />,
      },
      {
        path: "instructor/:key",
        element: <Instructor />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

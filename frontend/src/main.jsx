import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import Instructors from "./routes/Instructors";
import Classes from "./routes/Classes";
import Gallery from "./routes/Gallery";
import JoinContact from "./routes/JoinContact";
import Instructor from "./components/Instructor";
import Prices from "./routes/Prices";

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
        path: "classes",
        element: <Classes />,
      },
      {
        path: "prices",
        element: <Prices />,
      },
      {
        path: "contact",
        element: <JoinContact />,
      },
      {
        path: "instructor/:name",
        element: <Instructor />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

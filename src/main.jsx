import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contactNew";
import Brands from "./routes/brands";
import ArntsonMarine from "./routes/arntsonMarine";
import Boreal from "./routes/boreal";
import ChillAngel from "./routes/chillAngel";
import Gruezi from "./routes/gruezi";
import Haflinger from "./routes/haflinger";
import IcePeak from "./routes/icePeak";
import Luhta from "./routes/luhta";
import Point6 from "./routes/point6";
import Wolky from "./routes/wolky";
import ContactForm from "./routes/contactform";
import Success from "./routes/success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Brands />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/arntson-marine",
        element: <ArntsonMarine />,
      },

      {
        path: "/boreal",
        element: <Boreal />,
      },
      {
        path: "/chill-angel",
        element: <ChillAngel />,
      },
      {
        path: "/gruezi",
        element: <Gruezi />,
      },
      {
        path: "/haflinger",
        element: <Haflinger />,
      },
      {
        path: "/ice-peak",
        element: <IcePeak />,
      },
      {
        path: "/luhta",
        element: <Luhta />,
      },
      {
        path: "/point-6",
        element: <Point6 />,
      },
      {
        path: "/wolky",
        element: <Wolky />,
      },
      {
        path: "/contact-form",
        element: <ContactForm />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

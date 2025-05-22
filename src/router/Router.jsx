// src/router/Router.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Jobs from "../pages/Jobs";
import SupportHome from "../pages/SupportHome";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "jobs", element: <Jobs /> },
      { path: "support-home", element: <SupportHome /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

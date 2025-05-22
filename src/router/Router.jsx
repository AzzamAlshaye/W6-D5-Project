// src/router/Router.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/Jobs";
import GamePage from "../pages/GamePage";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
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
      { index: true, element: <GamePage /> },
      // {
      //   path: "games",
      //   element: <GamesLayout />,
      //   children: [
      //     { index: true, element: <GamePage /> },
      //     { path: "action", element: <ActionPage /> },
      //     { path: "adventure", element: <AdventurePage /> },
      //     { path: "rpg", element: <RpgPage /> },
      //     { path: "strategy", element: <StrategyPage /> },
      //     { path: "sports", element: <SportsPage /> },
      //   ],
      // },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

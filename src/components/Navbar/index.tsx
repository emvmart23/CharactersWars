"use client";
import React from "react";
import { dataStar } from "@/Counter/context";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Navbar = () => {
  const { navContent, setNavContent } = dataStar();

  const handleInfo = () => {
    setNavContent(false);
  };
  return (
    <nav className="bg-[#121212] h-20 min-w-[320px] w-full text-white">
      {navContent ? (
        <section>
          <button onClick={handleInfo}>
            <KeyboardArrowLeftIcon className="w-10 h-10" />
          </button>
          <p className="">second page</p>
        </section>
      ) : (
        <section>
          <p>People of Star Wars</p>
        </section>
      )}
    </nav>
  );
};

export default Navbar;

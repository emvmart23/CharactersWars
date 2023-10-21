"use client";
import { dataStar } from "@/Counter/context";
import React from "react";

const CharacterInfo = () => {
  const { characterInfoData, nav } = dataStar();

  return (
    <div
      ref={nav}
      className="text-xl h-screen absolute p-28 w-screen bg-white text-black left-[-430px] sm:hidden"
    >
      <aside className="">
        <h1 className="">General information</h1>
        <div className="flex justify-between">
          <h2>Eye Color</h2>
          <p>{characterInfoData?.eye_color}</p>
        </div>
        <div className="flex justify-between">
          <h2>Hair Color</h2>
          <p>{characterInfoData?.hair_color}</p>
        </div>
        <div className="flex justify-between">
          <h2>Skin Color</h2>
          <p>{characterInfoData?.birth_year}</p>
        </div>

        <h1 className="">Vehicles</h1>
        <div className="flex justify-between">//faltante</div>
      </aside>
    </div>
  );
};

export default CharacterInfo;

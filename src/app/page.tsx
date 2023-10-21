"use client";
import React from "react";
import { Props } from "@/components/Characters";
import GetData from "@/Api";
import { InfoList } from "@/common/components/index";
import { Characters, CharacterInfo}  from '../components/index'

export default function page() {
  const { info } = GetData();

  return (
    <>
      {info ? (
        <InfoList>
          {info.map((item: Props) => (
            <Characters key={item.name} data={item} />
          ))}
        </InfoList>
      ) : (
        <div>cargando.........</div>
      )}

      <CharacterInfo />
    </>
  );
}

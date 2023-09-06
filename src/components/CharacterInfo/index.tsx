'use client'
import { ContextStarWars } from '@/Counter/context'
import React, { useContext, useState } from 'react'


const CharacterInfo = () => {

  const { isDataShowOpen } = useContext(ContextStarWars)
  
  let character;

  if(isDataShowOpen) {
    character = (
    <div className='flex flex-col fixed border p-6 border-black h-full w-full left-[20%]'>

    </div>
    ) 
  }

  return (
    <>
      {character}
    </>
  )
}

export default CharacterInfo
'use client'
import React, { useContext } from 'react'
import Characters from '@/components/Characters'
import InfoList from '@/components/InfoList'
import { ContextStarWars } from '@/Counter/context'
import Loading from '@/components/InfoLoading'
import CharacterInfo from '@/components/CharacterInfo'

export default function page() {

  const { info } = useContext(ContextStarWars)

  return (
    <>
      
      {info === null && <Loading></Loading>}
      {info !== null && (
        
        <InfoList>
          {info?.map((item) => (
          <Characters key={item.name} data={item} />
          ))}
        </InfoList>
      )}
      
    </>
  )
}


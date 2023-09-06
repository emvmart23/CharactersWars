import React from 'react'

interface CharacterInfo {
    children: React.ReactNode
}

const IsEmmpty:React.FC<CharacterInfo>= ({children}) => {
  return (
    <div className=''>
       {children}
    </div>
  )
}

export default IsEmmpty;
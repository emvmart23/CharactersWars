import React from 'react'

interface InfoListProps { 
    children: React.ReactNode;
}

const InfoList:React.FC<InfoListProps> = ({ children }) => {
  return (
    <div className='w-screen h-auto absolute'>
        {children}
    </div>
  )
}

export default InfoList
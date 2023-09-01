import React from 'react'

interface InfoListProps { 
    children: React.ReactNode;
}

const InfoList:React.FC<InfoListProps> = ({ children }) => {
  return (
    <div className='w-[20%] h-18'>
        {children}
    </div>
  )
}

export default InfoList
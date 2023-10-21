import React from 'react'

interface LayoutProps {
    children : React.ReactNode;
}

const MainContent : React.FC<LayoutProps> = ({children}) => {
  return (
    <main className='relative h-screen'>
        {children}
    </main>
  )
}

export default MainContent
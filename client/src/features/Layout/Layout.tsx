

import React, { ReactNode } from 'react'

type LayoutType = {
  children: ReactNode
}

export const Layout: React.FC<LayoutType> = ({children}) => {
  return (
    <div className='w-screen h-full'>
      {children}
    </div>
  )
}


import React, { ReactNode } from 'react'

function Grid({ children, className: rest } : { children: ReactNode, className?: string }) {
  return (
    <div className={`grid grid-cols-6 m-4 gap-y-4 z-10 ${rest}`}>{children}</div>
  )
}

export default Grid
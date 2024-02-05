import React from 'react'

function Logo({size,color}) {
  return (
    <div>
        <h1 className={`logo text-xl text-${size} text-${color}`}>Blogie.</h1>
    </div>
  )
}

export default Logo
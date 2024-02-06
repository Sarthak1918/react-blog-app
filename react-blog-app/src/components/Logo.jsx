import React from 'react'

function Logo({size = "text-4xl",color}) {
  return (
        <h1 className={`logo ${size} text-${color}`}>Blogie.</h1>
  )
}

export default Logo
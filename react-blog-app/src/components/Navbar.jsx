import React from 'react'
import Logo from './Logo'

function Navbar() {


  const navItems = [
    {
      name:"Home",
      slug : "/"
    },
    {
      name:"All Posts",
      slug : "all-posts"
    },
    {
      name:"Add Post",
      slug : "add-post"
    }
  ]
  return (
    <div className='w-full p-4 flex justify-between items-center'>
        <div>
          <Logo size={"4xl"}/>
        </div>
        <ul className='flex gap-4 items-center'>
          {
            navItems.map((item)=>{
              return(
                <li key={item.name} className='hover:bg-blue-100  px-3 py-1 rounded-full font-medium transition-all'>
                  <button>{item.name}</button>
                </li>
              )
            })
          }
        </ul>

        <div className='font-semibold'>
          <button type="submit" className='hover:bg-blue-100 px-3 py-1 rounded-full font-medium transition-all'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar
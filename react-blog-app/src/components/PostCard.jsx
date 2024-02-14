import React from 'react'
import dbServerice from "../appwrite/dbServerice.js"
import { Link } from 'react-router-dom'

//$id -> id of a specific post.
//featuredImage -> id of the image.

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`} className='max-w-[300px] max-h-[350px] rounded-xl flex flex-col justify-center gap-2 p-5 bg-[#365486] text-gray-200'>
        <div className='overflow-hidden bg-center bg-cover bg-no-repeat'>
            <img  src={dbServerice.getFilePreview(featuredImage)} alt={title}  className='rounded-xl mx-auto'/>
        </div>
        <div className='text-[13px] font-semibold'>
            {title}
        </div>
    </Link>
  )
}

export default PostCard
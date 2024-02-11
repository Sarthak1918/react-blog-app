import React, { useState,useEffect } from 'react'
import {PostForm,PostCard} from "../index.js"
import dbService from '../../appwrite/dbServerice.js'
import {useParams,useNavigate} from "react-router-dom"



function EditPost() {
    const[post,setPost] = useState(null)
    const{slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            dbService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }
    },[slug,navigate])
  return post ?(
    <div className='w-full'>
        <PostForm post={post}/>
    </div>
  ) : null
}

export default EditPost
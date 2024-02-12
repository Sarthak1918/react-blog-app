import React,{useState,useEffect} from 'react'
import dbService from '../../appwrite/dbServerice'
import {PostCard} from "../index.js"
import {useSelector} from "react-redux"

 

function Home() {
    const[posts,setPosts] = useState([])
    useEffect(()=>{
        dbService.getAllPosts().then((posts)=>{
            setPosts(posts.documents)
        })
    },[])

    const authStatus = useSelector((state)=>state.auth.status)
    
  if(authStatus && posts.length === 0){
    return(
        <div className=' w-full text-3xl p-10 text-center'>
            No posts yet.
        </div>
    )
  }

  else if(!authStatus){
    return(
        <div className='w-full text-3xl p-10 text-center'>
            Login to read posts.
        </div>
    )
  }
  else if(authStatus && posts.length !== 0 ){
    return(
        <div className='w-full flex flex-wrap gap-5 p-5'>
        {
            posts.map((post)=>{
                return <div key={post.$id}>
                    <PostCard $id={post.$id} title = {post.title} featuredImage={post.featuredImage} post={post}/>
                </div>
            })
        }
    </div>
    )
  }
}

export default Home
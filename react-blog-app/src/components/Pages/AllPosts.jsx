import React, { useEffect, useState } from 'react'
import dbService from '../../appwrite/dbServerice'
import PostCard from '../index.js'

function AllPosts() {
    const[posts,setPosts] = useState([])

    useEffect(()=>{
        dbService.getAllPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

    
  return (
    <div className='w-full flex flex-wrap gap-5'>
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

export default AllPosts
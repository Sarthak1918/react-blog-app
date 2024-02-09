import React,{useCallback} from 'react'
import {useForm} from "react-hook-form"
import {Button,Input,Select,RTE} from "./index.js"
import dbService from '../appwrite/dbServerice.js'
import { Link,useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux"

function PostForm() {
    const{register,handleSubmit,watch,setValue,getValues,control} = useForm({
        defaultValues :{
            title : ''
        }
    })
  return (
    <div>PostForm</div>
  )
}

export default PostForm
"use client"
import Router from 'next/router'
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function index({params}) {
    const titleRef=useRef()
    const discriptionRef=useRef()
    const update=async()=>{
        const data={
            title:titleRef.current.value,
            content:discriptionRef.current.value
        }
       await fetch(`/api/blog/${params.id}`,{
            method:"PUT",
            body:JSON.stringify(data),
            headers:{
                'content-Type':'application/json'
            }
        }).then(res=>res.json())
        .catch(err=>err.message)
        location.assign("/")
    }
    const data=async()=>{
        const res = await fetch(`/api/blog/${params.id}`).then((res=>res.json()))
        titleRef.current.value=res.message.title
        discriptionRef.current.value=res.message.content
     }
    useEffect(()=>{
        data()
    },[])
    return  <div>
    {/* <form onSubmit={addBlog}> */}
        <div className="flex">
            <div className="border-color btn addBlog">
                <Link href="/blog/addblog" className="">Add Blog</Link>
            </div>
            <button onClick={()=>history.back()} className="btn btnUpdate">Back</button>
        </div>
        <div className="editData">
            <div>
                <div>
                    <label htmlFor="blogTitle">Title :</label>
                </div>
                <div>
                    <input type="text" name="blogTItle" ref={titleRef}/>
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="blogDiscription">Description :</label>
                </div>
                <div>
                    <textarea ref={discriptionRef}></textarea>
                </div>
            </div>
            <button onClick={update} className="btn btnUpdate">Update</button>
        </div>
        
    {/* </form> */}
</div>
}
"use client";
import { useEffect, useState } from "react"

const blogId=({params})=>{
 const [singleBlog,setSingleBlog]=useState([])
 const {id,title,content}=singleBlog
 const data=async()=>{
    const res = await fetch(`/api/blog/${params.bid}`).then((res=>res.json()))
    if (!res) {
		return notFound()
	}
    else{
        setSingleBlog(res.message)
    }
   
 }

 useEffect(()=>{
    data()
 },[])   

    return(
        <div>
          <div>
          <button onClick={()=>history.back()} className="btn btnUpdate">Back</button>
          </div>
           
          <h2 className="blogheading font-bold">{title}</h2>
          <div className="blogContent">{content}</div>
        </div>
    )

     
}
export default blogId

// async function BlogPostPage({ params }) {
// 	const blogPost = await await fetch(`/api/blog/${params.bid}`)

// 	if (!blogPost) {
// 		return notFound()
// 	}

// 	return <>test</>
// }
// export default BlogPostPage

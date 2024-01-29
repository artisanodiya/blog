"use client"
import { useEffect, useRef, useState } from "react"
import Pagination from "../../component/pagination/Pagination"
// import ExportExel from "../../component/Export/ExportExel"
import Link from "next/link"

const Blog=({BlogList})=>{
    const pageLimit=6
    const [blogs,setBlogs]=useState([])
    const [serchdata,setSerchData]=useState([])
    const [checkSearch,setCheckSearch]=useState(false)
    const [blog,setBlog]=useState([])
    const [a,sets]=useState([])
    const searchRef=useRef();

    const bd=async()=>{
        const data=await BlogList
        setBlog(data.message)
    }

    

    const search=()=>{
        const s=blog.filter((data)=>data.title.toLowerCase().includes(searchRef.current.value)||data.content.toLowerCase().includes(searchRef.current.value))
        setSerchData(s)
        setCheckSearch(true)
    }
    // const dataas=async()=>{
    //    let d= await fetch("/api").then((res)=>res.json()).then((data)=>{return data})
    //    sets(d) 
    //    setBlog(d.message)
    //  }
    useEffect(()=>{
       // dataas()
       bd()
        // let blogGet=localStorage.getItem("blogData")
        // blogGet ? setBlog(JSON.parse(blogGet)): null
        
    },[])
// console.log(a)
      const handleSaveToPC = (jsonData,filename) => {
        const fileData = JSON.stringify(jsonData);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${filename}.json`;
        link.href = url;
        link.click();
      }

    const deleteBlog=async(id)=>{
       let a= blog.filter((b)=>b.id!==id)
       localStorage.setItem("blogData",JSON.stringify(a))
       setBlog(a)
       await fetch(`/api/blog/${id}`,{
        method:"DELETE",
        headers:{
            'content-Type':'application/json'
        }
    }).then(res=>res.json())
    .catch(err=>err.message)
    }
    return(
        <div className="">
            {/* <ExportExel exceldata={blog} fileName={"Excel Export"}/> */}
            {/* <button onClick={()=> handleSaveToPC(blog,blog)} className="border-color btn">BLog File</button>
            <Link href="/blog/addblog" className="border-color btn">Add Blog</Link>
            <h1 className="font-extrabold text-center">Blog</h1>
            <input type="search" ref={searchRef} className="border-color border-radius" onKeyUp={search}/>
            <button className="border-color btn" onClick={search}>Search</button> */}
              
           <h1 className="heading font-bold">Blog</h1>
           <div className="flex justify-between pt-6 header-blog">
            <div>
            <Link href="/blog/addblog" className="border-color btn btnColor">Add Blog</Link>
            </div>
           <div className="header-search">
            <input type="search" ref={searchRef} className="border-color border-radius searchInput" onKeyUp={search} />
            <button className="border-color btn btnColor" onClick={search}>Search</button>
            <button onClick={()=> handleSaveToPC(blog,blog)} className="border-color btn btnColor">Export Json</button>
           {/* <ExportExel exceldata={blog} fileName={"Excel Export"}/> */}
           </div></div>
            <div>
                {
                    blogs.map((blogD,index)=>(
                        <div key={index} className="border-color border-radius blog">
                            <Link href={`/blog/${encodeURIComponent(blogD.id)}`}><h2 className="blogheading font-bold">{blogD.title}</h2></Link> 
                            <div className="blogContent">{(blogD.content).slice(0,150)}...</div>
                            <div className="actionBtn">
                                <button onClick={()=>deleteBlog(blogD.id)} className=" border-color btn deleteBtn">Delete</button>
                                <div className="border-color btn updateBtn"><Link href={`/blog/update/${blogD.id}`} >update</Link></div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <Pagination items={!checkSearch ? blog : serchdata} pageLimit={pageLimit} setPageItems={setBlogs}/>
            {
                
                Array.isArray(a.message)?
                a.message.map((d)=><>{d.id}{d.title}</>)
                :null
                // a.key((d)=><>{d.id}{d.title}</>)
            }
        </div>
    )
}
export default Blog

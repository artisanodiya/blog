import { strict } from "assert";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export function Update() {
    const titleRef=useRef()
    const discriptionRef=useRef()
    const router=useRouter()
    const [data,setData]=useState([])
    const update=()=>{
       let a= data.find((i)=>i.id=== parseInt(router.query.id) && (
        i.title=titleRef.current.value,
        i.content=discriptionRef.current.value
    ))
        localStorage.setItem("blogData",JSON.stringify(data))
    }
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("blogData")))
        data.find((i)=>i.id=== parseInt(router.query.id) && (
            titleRef.current.value=i.title,
            discriptionRef.current.value=i.content
        ))
  
    },[router])

    return (
          <div>
            {/* <form onSubmit={addBlog}> */}
                <div>
                    <label htmlFor="blogTitle">Title</label>
                    <input type="text" name="blogTItle" ref={titleRef}/>
                </div>
                <div>
                    <label htmlFor="blogDiscription">Description</label>
                    <textarea ref={discriptionRef}></textarea>
                </div>
                <button onClick={update}>Save</button>
            {/* </form> */}
        </div>
    );
}

// export default Update;
import { useEffect, useRef, useState } from "react";
//  import { blog } from "./BlogList";

function AddBLog() {
    const titleRef=useRef()
    const discriptionRef=useRef()
    const [blogs,setBlogs]=useState([])
   
    // const [blog]
    const addBlog=()=>{
        let id=+blogs.slice(-1).map((i)=>i.id)+1
        const blogdata={
            id:id,
            title:titleRef.current.value,
        content:discriptionRef.current.value
        }
        console.log(titleRef.current.value)
        let newBlog=([...blogs,blogdata])
        setBlogs(newBlog)
        localStorage.setItem("blogData",JSON.stringify(newBlog))

        fetch("/api/blog",{
            method:"POST",
            body:JSON.stringify(blogdata),
            headers:{
                'content-Type':'application/json'
            }
        }).then((res)=>res.json())
        .then((data)=>console.log(data))
        location.assign("/")
        titleRef.current.value=null
       discriptionRef.current.value=null
    }
    // const handleSaveToPC = (jsonData,filename) => {
    //     const fileData = JSON.stringify(jsonData);
    //     const blob = new Blob([fileData], {type: "text/plain"});
    //     const url = URL.createObjectURL(blob);
    //     const link = document.createElement('a');
    //     link.download = `${filename}.json`;
    //     link.href = url;
    //     link.click();
    //   }
    useEffect(()=>{
        let blogGet=localStorage.getItem("blogData")
        let a=JSON.parse(blogGet)
        blogGet ? setBlogs(JSON.parse(blogGet)): null
        
    },[])
  
    return (
        <div>
            <button onClick={()=>history.back()} className="btn btnUpdate">Back</button>
            <div className="editData">
                {/* <form onSubmit={addBlog}> */}
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
                    <button onClick={ addBlog} className="btn btnUpdate">Save</button>
                {/* </form> */}
            </div>
        </div>
        
    );
}

export default AddBLog;
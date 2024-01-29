import { useRef, useState } from "react";
// import { blog } from "../BlogData/BlogList";

function Search(props) {
    const {blogs}=props
    const searchRef=useRef();
    const [serchdata,setSerchData]=useState([])
    const search=()=>{
     const s=blog.filter((data)=>data.title.toLowerCase().includes(searchRef.current.value)||data.content.toLowerCase().includes(searchRef.current.value))
     console.log(s)
    }
    return (
        <div>
             <input type="search" ref={searchRef} className="border-solid border-2 rounded-md"/><button className="border-solid border-2 rounded-md" onClick={search}>Search</button>
             {
                    Array.isArray(blogs) ?
                    blogs.map((blogD,index)=>(
                        <div key={index} className="p-3 my-4 border-solid border-2 rounded-md">
                            <h1 className="font-extrabold">{blogD.title}</h1>
                            <div>{(blogD.content).slice(0,150)}...</div>
                        </div>
                    )):null
                }
        </div>
    );
}

export default Search;

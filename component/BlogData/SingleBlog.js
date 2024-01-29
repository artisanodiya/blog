import { useEffect, useState } from "react";

function SingleBlog(id) {
    // return JSON.parse(localStorage.getItem("blogData"))
    
    // const [datab,setData]=useState()
    let data=JSON.parse(localStorage.getItem("blogData"))
  return data.find((blog)=>blog.id===parseInt(id))
//   useEffect(()=>{
//         let data=JSON.parse(localStorage.getItem("blogData"))
//         setData(data.find((blog)=>blog.id===parseInt(props.id)))
//       },[props])
//   console.log(datab)

//     return (
//         <div>
//             {
//                 datab !=="undefined"? <>
//                   <h2>{datab.title}</h2>
//     <div>{datab.content}</div> 
//                 </>

//                 :null
//             }
          
//         </div>
//     );
}

export default SingleBlog;
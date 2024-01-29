"use client";
import Blog from "../component/BlogData/Blog"


export const dataa=async()=>{
    const res = await fetch("api/blog",{ next: { revalidate: 3600 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
    // await fetch("/api").then((res)=>res.json()).then((data)=>{return data})
    
}

// async function getBLog(){
//   const res = await fetch("/api/blog")
//   const data=await res.json()
//   return data
// }
const index=()=>{
    const data=dataa()
    // const blog=await getBLog()
    // console.log(blog)

    return(
       <Blog BlogList={data}></Blog>
    )
}
export default index

// export async function getStaticProps() {
//  const dataA=   fetch("/api",{
//     method:"GET",
//     headers:{
//         'content-Type':'application/json'
//     }
// }).then((res)=>res.json())
// .then((data)=>{return data})
//     console.log(blog)
//      return {
//        props: {
//         selectBlog:dataA
//        },
//      }
//    }

//    export const getStaticProps = (async (context) => {
//     const res = await fetch("/api")
//     const repo = await res.json()
//     return { props: { repo } }
//   })
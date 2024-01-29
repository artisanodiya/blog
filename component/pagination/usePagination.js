import { useState } from "react"

export const usePagiantion=(items,pageLimit)=>{
    const [pageNumber,setPageNumber]=useState(1)
    const pageCount=Math.ceil(items.length/pageLimit)
    // let p=[];
    // for(let i=1;i<=4;i++)
    // {
    //     p.push(i)
    // }
    // console.log(p)
    const pageNumberList=Array.from({length:pageCount},(v,i)=>i+1)


    const changePage=(pn)=>{
        setPageNumber(pn)
    }

    const pageData=()=>{
        const s=(pageNumber-1)*pageLimit
        const e=s+pageLimit;
        return items.slice(s,e)
    }

    const nextPage=()=>{
        setPageNumber(Math.min(pageNumber+1,pageCount))
    }

    const priviousPage=()=>{
        setPageNumber(Math.max(pageNumber-1,1))
    }
    return {pageNumber,pageNumberList,changePage,pageData,nextPage,priviousPage}
}


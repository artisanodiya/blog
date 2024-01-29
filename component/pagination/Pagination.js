import { useEffect } from "react";
import { usePagiantion } from "./usePagination";

function Pagination(props) {
    const {pageNumber,changePage,pageData,nextPage,priviousPage,pageNumberList}=usePagiantion(props.items,props.pageLimit)
    useEffect(()=>{
        props.setPageItems(pageData)
    },[pageNumber,props.items])
    console.log(props.items.length)
    return (
        <div>
            {
                props.items.length!==0 ? <>
                { pageNumber!==1 && <button onClick={priviousPage} className="pagination-button">Prev Page</button>}
                
                {/* <input value={pageNumber} type="number" onChange={(e)=>changePage(e.target.valueAsNumber)}></input> */}
                {
                    pageNumberList.map((num,index)=>
                    <button key={index} onClick={()=>changePage(num)} className={`pagination-button ${num===pageNumber && "active"}`}>{num}</button>
                    )
                }
                {pageNumber!==pageNumberList[pageNumberList.length-1] && <button onClick={nextPage} className="pagination-button">Next page</button>}
                </>:<p>Data not Found</p>
        }
        </div>
    );
}

export default Pagination;
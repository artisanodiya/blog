import FileSaver from "file-saver"
import XLSX from "sheetjs-style"


function ExportExel({exceldata,fileName}) {
    const fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"
    const fileextention=".xlsx"
    const ecportToExcel=()=>{
        const ws=XLSX.utils.json_to_sheet(exceldata)
        const wb={Sheets:{'data':ws},SheetNames:['data']}
        const excelbuffer=XLSX.write(wb,{bookType:'xlsx',type:'array'})
        const data=new Blob([excelbuffer],{type:fileType})
        FileSaver.saveAs(data,fileName+fileextention)
    }
    return (
        <div>
            <button onClick={ecportToExcel}>Export TO ExportExel</button>
        </div>
    );
}

export default ExportExel;
import React, {  useEffect, useState } from 'react'
import './stock.css'
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dashhead from '../Dashhead';
import Darkmode from '../Darkmode';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx'
import GetAppIcon from '@mui/icons-material/GetApp';
import { Button, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import { sendData } from '../app/socket/socketActions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import moment from 'moment'
const Geneticstock = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [display, setDisplay] = React.useState(false);
  const [department, setDepartment] = React.useState('');
  const [selectedRows,setSelectedRows]= useState([])
  const [data ,setData]= useState( [])
  // =====================================================================================================================================================
  const url= process.env.REACT_APP_DEVELOPMENT
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiX2lkIjoiNjVlODZiNzZmOTk0ZmQzZTdmNDliMjJiIiwiaWF0IjoxNzA5NzkzMDcwfQ.siBn36zIBe_WmmIfuHMXI6oq4KMJ4dYaWQ6rDyBBtEo"

// ==============================================columns======================================================================
  const columns=[
    {field:"id",headerName:"S.N",width:70},
    {field:"itemCode",headerName:"Item code",width:150,valueGetter:(param)=>(param.row.product.itemCode)},
    {field:"productName",headerName:"Product name",width:150,valueGetter:(param)=>(param.row.product.productName)},
    {field:"totalQuantity",headerName:"Quantity",width:150},
    {field:"expiry",headerName:"Expiry",valueGetter: (param) => param.row.expiryArray?moment.parseZone(param.row.expiry).local().format("DD/MM/YY"):"-",width:150},
    {field:"sku",headerName:"S.K.U",width:150,valueGetter:(param)=>(param.row.product.sku)},
    {field:"lotNumber",headerName:"Lot number",width:150,valueGetter:(param)=>(param.row.product.lotNumber)},
    {field:"manufacturer",headerName:"Mnufacturer",width:150,valueGetter:(param)=>(param.row.product.manufacturer)},
 
  ]
//  =====================================================Rdex data send==============================================================================
  const labName = 'Genetic Lab'
  const handelClick = ()=>{
    const dataToSend = selectedRows.map(row=>({
      ...row,
      labName:labName
    }))
    dispatch(sendData(dataToSend));
  history.push('/Order')
    // console.log(dataToSend)
  }
// ============================================Xl code export=================================================================================
const handleExport = () => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  saveAs(new Blob([excelBuffer], { type: 'application/octet-stream' }), 'Genetic stock.xlsx');
};

// ============================================Get api=================================================================================
const getGeneticStock=async()=>{
  axios.get(`${url}/api/stock/getAllStocks`,{headers:{token:accessToken}})
  .then(res=>{
//  let arr = res.data.result.map(item=>item.product)
let arr = res.data.result.map((item, index) => {
  const fieldsToCheck = ['supplierName', 'productName', 'sku', 'lotNumber', 'manufacturer', 'physicalLocation', 'unit', 'addModel'];
  fieldsToCheck.forEach(field => {
      if (item.product.itemCode.includes(item.product[field] ?? '')) {
          item.product.itemCode = item.product.itemCode.replace(item.product[field] ?? '', '');
      }
  });
  return { ...item, id: index + 1 };
});
setData(arr);

  console.log(arr)
  
    // let arr = res.data.result.map((item,index)=>({...item,id:index+1}))
    
    // let arr = res.data.result.map((item=>item.product,index)=>{
    //   const fieldsToCheck = ['supplierName', 'productName', 'sku', 'lotNumber', 'manufacturer', 'physicalLocation', 'unit','addModel'];
    //   fieldsToCheck.forEach(field=>{
    //     if(item.itemCode.includes(item[field])){
    //       item.itemCode = item.itemCode.replace(item[field],'')
    //     }
    //   })
    //   return {...item, id:index +1}
    // })
    // setData(arr)
    // setData(arr)
    // let arr = res.data.result.map(item=>item.product)
    // console.log(arr)
  })
}
// ============================================By default  api=================================================================================

  useEffect(()=>{
    getGeneticStock()
  },[])
  
  // ================================================End=================================================================================
  return (
    <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
      <Dashhead id={6} display={display} />
    </div>

    <div
      className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container"
      onClick={() => display && setDisplay(false)}
    >
      <span className="iconbutton display-mobile">
        <IconButton
          size="large"
          aria-label="Menu"
          onClick={() => setDisplay(true)}
        >
          <MenuIcon fontSize="inherit" />
        </IconButton>
      </span>
      <h1 className="my-5 title text-center">
      genetic  stock
        
        </h1>
        <div className='icondiv'>
      <Tooltip title="Export in xl"> <GetAppIcon className='exporticon' onClick={handleExport} /></Tooltip> 
        </div>
        <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        paginationMode='client'
        paginationModel={{
          pageSize: 5,
          page: 0,
        }}
        pagination={true}
        checkboxSelection
        onSelectionModelChange={(ids)=>{
          const selectedIDs = new Set(ids);
          const selectedRows = data.filter((row)=>
          selectedIDs.has(row.id),
          )
          setSelectedRows(selectedRows)
        }}
        {...data}
      />
    </div>
    <div className="text-center my-5">
  <Button variant="contained" onClick={handelClick}> Order </Button> 
    </div>
        </div>
       
        <Darkmode/>
        </div>
  )
}

export default Geneticstock


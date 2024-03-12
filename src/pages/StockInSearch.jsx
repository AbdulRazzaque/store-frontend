

import React, { useEffect, useState } from 'react'
import "../components/Home.scss";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dashhead from "../components/Dashhead";
import Darkmode from '../components/Darkmode';
import { Autocomplete, Button, Checkbox, Container, FormControlLabel, FormGroup, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { DatePicker, DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import moment from 'moment'
import dayjs from 'dayjs';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
const StockInSearch = () => {
    const [display, setDisplay] = React.useState(false);
    const [allProducts,setAllProducts] = React.useState([])
    const [selectedDate,setSelectedDate]= useState()
    const [selectedDate2,setSelectedDate2]= useState()
    const [product,setProduct] = React.useState([])
    // const [deleteRow,setDeleteRow]=useState([])
    const [data,setData]=useState([])
    const [selectAll, setSelectAll] = useState(false);
    const [selectedDepartment,setSelectedDepartment]=useState([])

  // =====================================================================================================================================================
    const url = process.env.REACT_APP_DEVELOPMENT
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiX2lkIjoiNjVlODZiNzZmOTk0ZmQzZTdmNDliMjJiIiwiaWF0IjoxNzA5NzkzMDcwfQ.siBn36zIBe_WmmIfuHMXI6oq4KMJ4dYaWQ6rDyBBtEo"

// ========================================================================================================================================================
    const Department = [
        { label: 'TCGC'},
        { label: 'Microbiology'},
        { label: 'Central'},
        { label: 'Parasitology' },
    ]
    const Product = [
        { label: 'G1243 - Yellow Tip'},
        { label: 'B343 - 10ml Syringe'},
        { label: 'C33A Alcohol'},
        { label: 'M3455 Bioestrovet' },
    ]

    const rows =[
        {doc:1,department:'Genetic',itemCode:3423, itemDescription:"Yellow-Tip",quantity:104,expiryDate:'12-2-2025', requestby:'Mustaquim'},
        {doc:2,department:'Genetic',itemCode:3423, itemDescription:"Yellow-Tip",quantity:1064,expiryDate:'12-2-2025',requestby:'Dr.Ram sing'}
    ]
    const columns = [
      { field: 'id', headerName:'No' , width: 70 },
      { field: 'name', headerName:'Products Name' , width: 150 },
      { field: 'department', headerName:'Department' , width: 150 },
      { field: 'quantity', headerName: 'Quantity' ,width: 150 },
        {field: "createdAt",headerName: "Date", type:'date',width: 150,valueGetter:(rowData)=>moment(rowData.createdAt).format("DD/MM/YYYY")},
        {field: "expiry",headerName: "Expiry Date", type:'date',width: 150,valueGetter:(rowData)=>moment(rowData.expiry).format("DD/MM/YYYY")},
        
    ]; 


    const handleSelectAll = (event) => {
      if (event.target.checked) {
        setProduct(allProducts);
      } else {
        setProduct([]);
      }
    };
  
    const handleProductChange = (event, newSelectedProducts) => {
      setProduct(newSelectedProducts);
    };
// =======================================================================get api ======================================================================

    const getAllProduct=async()=>{
      try {
        axios.get(`${url}/api/product/getAllProducts`,{headers:{token:accessToken}})
        .then(res=>{
          setAllProducts(res.data.result)
          console.log(res.data.result)
        })
      } catch (error) {
        console.log(error)
        
      }
    }

// =======================================================================Post api ======================================================================

const handleSubmit = ()=>{
  axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/stock/getPrevStockInInfo`,{start:selectedDate,end:selectedDate2,department:selectedDepartment,productId:product.map(i=>i._id)},{headers:{token:accessToken}})
  .then(res=>{
    console.log(res)
    // setTotal(res.data.result)
    let arr = res.data.result.map((item,index)=>({...item,id:index+1}))
    setData(arr)
   
    // console.log(Mytotal,"Geting  Price Only");
  })

}
// =======================================================================by Defaul api call======================================================================

    useEffect(()=>{
      getAllProduct()
    },[])
// =======================================================================End======================================================================

    return (
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
          <Dashhead id={8} display={display} />
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
              stock-in search
            
            </h1>



{/* ==================================================================Form code here ===================================================== */}

<Container>
        <Stack direction="row" spacing={2} justifyContent="center">
    <section>
        <LocalizationProvider 
        
        dateAdapter={AdapterDateFns} >
        <DesktopDatePicker
        label="Start Date"
        inputFormat="dd/MM/yyyy"
        value={selectedDate}
        onChange={(newValue) => {
          console.log(newValue)
          setSelectedDate(newValue)
        }}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
      </LocalizationProvider>
      </section>
      <section>
        <LocalizationProvider 
        
        dateAdapter={AdapterDateFns} >
        <DesktopDatePicker
        label="End Date"
        inputFormat="dd/MM/yyyy"
        value={selectedDate2}
        onChange={(newValue) => {
          console.log(newValue)
          setSelectedDate2(newValue)
        }}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
      </LocalizationProvider>
      </section>
      <section>
   <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(member)=>member.label}
                     options={Department}
                     onChange={(event,value)=>{
                      setSelectedDepartment(value.label)
                     }}
                    sx={{ width: 180 }}
                    renderInput={(params) => <TextField {...params} label="Department" />}
                    />
   </section>
      <section>

   
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectAll}
              onChange={handleSelectAll}
              color="primary"
            />
          }
          label="Select All"
        />
      </FormGroup>
      </section>

      <section>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={allProducts}
        value={product}
        sx={{ width: 400 }}
        onChange={handleProductChange}
        getOptionLabel={(option) => option.productName}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Products"
            placeholder="Select Product"
          />
        )}
      />
   </section>

          <section>

 <button type="button" class="btn btn-primary" onClick={()=>handleSubmit()}>Submit</button>
          </section>
    </Stack>
 
    <div className='mt-3 ali'>

    </div>

        </Container>
{/* ==================================================================Table ===================================================== */}

<DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { psku: 0, pskuSize: 5 },
            },
          }}
          pskuSizeOptions={[5, 10]}
          // onRowClick={(item)=>setUpdate(item.row)}
        />
            </div>
            <Darkmode/>
            </div>
      )
}

export default StockInSearch
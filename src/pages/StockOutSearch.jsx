// import React, { useState } from 'react'
// import "../components/Home.scss";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Dashhead from "../components/Dashhead";
// import Darkmode from '../components/Darkmode';
// import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// import dayjs from 'dayjs';
// const StockOutSearch = () => {

//     const [display, setDisplay] = React.useState(false);
//     const [selectedDate,setSelectedDate]= useState()
//     const [selectedDate1,setSelectedDate1]= useState()
//     const [showDialog,setShowDialog]= useState(false)
//     const [update,setUpdate]=useState([])
//     // const [deleteRow,setDeleteRow]=useState([])
//     const [alert,setAlert]= useState(false)

// // ========================================================================================================================================================
//     const Department = [
//         { label: 'TCGC'},
//         { label: 'Microbiology'},
//         { label: 'Central'},
//         { label: 'Parasitology' },
//     ]
//     const Product = [
//         { label: 'G1243 - Yellow Tip'},
//         { label: 'B343 - 10ml Syringe'},
//         { label: 'C33A Alcohol'},
//         { label: 'M3455 Bioestrovet' },
//     ]

//     const rows =[
//         {doc:1,department:'Genetic',itemCode:3423, itemDescription:"Yellow-Tip",quantity:104,expiryDate:'12-2-2025', requestby:'Mustaquim'},
//         {doc:2,department:'Genetic',itemCode:3423, itemDescription:"Yellow-Tip",quantity:1064,expiryDate:'12-2-2025',requestby:'Dr.Ram sing'}
//     ]
// // ================================================================open Dialog api & Update code here =====================================================

//     const updateData=(e)=>{
//         setUpdate({...update,[e.target.name]:e.target.value});
//     }
// // =======================================================================Delete Dialog and api code here ======================================================================

//     return (
//         <div className="row">
//         <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
//           <Dashhead id={7} display={display} />
//         </div>
    
//         <div
//           className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container"
//           onClick={() => display && setDisplay(false)}
//         >
//           <span className="iconbutton display-mobile">
//             <IconButton
//               size="large"
//               aria-label="Menu"
//               onClick={() => setDisplay(true)}
//             >
//               <MenuIcon fontSize="inherit" />
//             </IconButton>
//           </span>
//           <h1 className="my-5 title text-center">
//               stock-out search
            
//             </h1>
// {/* ==================================================================open Dialog code here ===================================================== */}

//                   <form>
//                         {/* Thsi Diloag box for Delete Alert  */}
       
//             {alert && (
//               <Dialog open={alert} style={{ height: 600 }}>
//                 <DialogTitle>Delete Row</DialogTitle>
//                 <DialogContent>
//                   <DialogContentText id="alert-dialog-description">
//                     Are You sure You want to delete this.
//                   </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
                
//                   <Button variant="contained">
//                   {/* <Button variant="contained" onClick={() => deleteRow(update)}> */}
//                     Yes
//                   </Button>
//                   <Button
//                     variant="outlined"
//                     color="error"
//                     onClick={() => {
//                       setAlert(false);
//                     }}
//                   >
//                     Cancel
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//             )}
//         {update && 
//         (
//             <Dialog open={showDialog}  fullWidth
//         >
//                 <DialogTitle className='text-center'>Update Data</DialogTitle>
//                 <DialogContent>
//                     <div className="row mt-4">
//                     <div className="col-auto">
//                      <TextField id='outlined-basic' label="Doc" sx={{width:120}} value={update.doc} />
//                       </div>
//                         <div className="row">
//                         <div className="col-auto">
//                       <Autocomplete
//                     disablePortal
//                     value={update.department}
//                     id="combo-box-demo"
//                      options={Department}
//                     sx={{ width: 400 }}
//                     renderInput={(params) => <TextField {...params} label="Select department" required  />}
                    
//                     />
//                         </div>
                      
//                       </div>
                      
//                       <div className="row mt-4 mx-2">
                   
//                       <div className="col">
//                       <Autocomplete
//                     disablePortal
//                     id="combo-box-demo"
//                     value={update.itemDescription}
//                      options={Product}
//                     sx={{width:550}}
//                     renderInput={(params) => <TextField {...params} label="Select item code,Product name" required/>}
                    
//                     />
//                       </div>
//                       </div>
//                       <div className="row mt-4 mx-2">
                   
//                       <div className="col">
//                      <TextField id="outlined-basic" label="Quantity" sx={{width:550}} value={update.quantity} name='quantity' onChange={updateData} />
//                       </div>
//                       </div>
//                       <div className="row mt-4 mx-2">
                   
//                       <div className="col">
//                       <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DatePicker
//                     sx={{ width: 550 }}
                    
//                     label="Choose expiry date"
//                     value={dayjs(update.date)}
//                     onChange={(newValue) => {
//                       setSelectedDate(newValue);
//                     }}
//                     required
//                     renderInput={(params) => (
//                       <TextField name="date" {...params} />
//                     )}
                    
//                   />
//                 </LocalizationProvider>
//                       </div>
//                       </div>
                     
//                     </div>
                  
//                 </DialogContent>
//                 <DialogActions>
//                   <Button type="submit" variant="contained" >
//                     Update
//                   </Button>
//                   <Button
//                     variant="outlined"
//                     color="error"
//                     onClick={() => {
//                         setShowDialog(false);
//                     }}
//                     >
//                     Cancel
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//         )
        
//         } 
           
//                       </form>


// {/* ==================================================================Form code here ===================================================== */}

//             <form>
          
//             <div className="d-flex flex-column align-items-center ">
//                 <div className="row">
//                     <div className="col-auto">
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DatePicker
//                     sx={{ width: 200 }}
//                     label="From"
//                     value={selectedDate}
//                     onChange={(newValue) => {
//                       setSelectedDate(newValue);
//                     }}
//                     required
//                     renderInput={(params) => (
//                       <TextField name="date" {...params} />
//                     )}
                    
//                   />
//                 </LocalizationProvider>
//                         </div>
//                     <div className="col-auto">
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DatePicker
//                     sx={{ width: 200 }}
//                     label="To"
//                     value={selectedDate1}
//                     onChange={(newValue) => {
//                       setSelectedDate1(newValue);
//                     }}
//                     required
//                     renderInput={(params) => (
//                       <TextField name="date" {...params} />
//                     )}
                    
//                   />
//                 </LocalizationProvider>
//                         </div>
//                     <div className="col-auto"> 
//                      <Autocomplete
//                     disablePortal
//                     id="combo-box-demo"
//                      options={Department}
//                     sx={{ width: 180 }}
//                     renderInput={(params) => <TextField {...params} label="Department" />}
//                     />
//                     </div>
//                     <div className="col-auto">
//                     <Autocomplete
//                     disablePortal
//                     id="combo-box-demo"
//                      options={Product}
//                     sx={{ width: 400 }}
//                     renderInput={(params) => <TextField {...params} label="Select item code,Product name" required/>}
                    
//                     />
//                     </div>
                   
//                 </div>
//             </div>
//             <div className='text-center my-5'>

//                 <Button variant="contained" type= "submit" className=''>Submit</Button>
//             </div>
//             </form>
// {/* ==================================================================Table ===================================================== */}

//             <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>S.N</TableCell>
//             <TableCell >Department</TableCell>
//             {/* <TableCell >Item code</TableCell> */}
//             <TableCell >Item description</TableCell>
//             <TableCell >Quantity</TableCell>
//             <TableCell >Date</TableCell>
//             <TableCell >Request by</TableCell>
        
//           </TableRow>
//         </TableHead>
//         <TableBody>
         
//             {
//                 rows.map((row)=>(
//                     <TableRow key={row.doc}>
//                     <TableCell >{row.doc}</TableCell>
//                     <TableCell >{row.department}</TableCell>
//                     {/* <TableCell >{row.itemCode}</TableCell> */}
//                     <TableCell >{row.itemDescription}</TableCell>
//                     <TableCell >{row.quantity}</TableCell>
//                     <TableCell >{row.expiryDate}</TableCell>
//                     <TableCell >{row.requestby}</TableCell>
//                     </TableRow>
//                 ))
//             }


//         </TableBody>
//       </Table>
//     </TableContainer>
//             </div>
//             <Darkmode/>
//             </div>
//       )
// }

// export default StockOutSearch



import React, { useEffect, useState } from 'react'
import "../components/Home.scss";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dashhead from "../components/Dashhead";
import Darkmode from '../components/Darkmode';
import { Autocomplete, Checkbox, Container, FormControlLabel, FormGroup, Stack,  TextField } from '@mui/material';
import {  DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import moment from 'moment'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
const StockOutSearch = () => {
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
const department =[
  {name:'GENETIC'},
  {name:"MICROBIOLOGY"},
  {name:"HEAMOTOLGY"},
  {name:"BIOCHEMISTRY"},
  {name:"HPLC"},
  {name:"AAS"},
  {name:"PARASITOLOGY"},
  {name:"GENERAL"},
     
  
]

 
    const columns = [
      { field: 'id', headerName:'No' , width: 70 },
      { field: 'name', headerName:'Products Name' , width: 150 },
      { field: 'department', headerName:'Department' , width: 150 },
      { field: 'quantity', headerName: 'Quantity' ,width: 150 },
        {field: "createdAt",headerName: "Date", type:'date',width: 150,valueGetter:(rowData)=>moment(rowData.createdAt).format("DD/MM/YYYY")},
        {field: "expiry",headerName: "Expiry Date", type:'date',width: 150,valueGetter:(rowData)=>moment(rowData.expiry).format("DD/MM/YYYY")},
        { field: 'memberName', headerName:'Request by' , width: 150 },
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
  axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/stock/getPrevStockOutInfo`,{start:selectedDate,end:selectedDate2,department:selectedDepartment,productId:product.map(i=>i._id)},{headers:{token:accessToken}})
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
          <Dashhead id={7} display={display} />
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
              stock-out search
            
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
                    getOptionLabel={(member)=>member.name}
                      options={department}
                     onChange={(event,value)=>{
                      setSelectedDepartment(value.name)
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

export default StockOutSearch
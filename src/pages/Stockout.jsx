import React, { useState } from 'react'
import "../components/Home.scss";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dashhead from "../components/Dashhead";
import Darkmode from '../components/Darkmode';
import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import dayjs from 'dayjs';
import PrintIcon from '@mui/icons-material/Print';
import { Link } from 'react-router-dom/cjs/react-router-dom';
const Stockout = () => {

    const [display, setDisplay] = React.useState(false);
    const [selectedDate,setSelectedDate]= useState()
    const [showDialog,setShowDialog]= useState(false)
    const [update,setUpdate]=useState([])
    // const [deleteRow,setDeleteRow]=useState([])
    const [alert,setAlert]= useState(false)

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
    const Member = [
        { label: 'Mustaquem'},
        { label: 'Dr.Mutto'},
        { label: 'Dr.Marwa'},
        { label: 'Roy' },
    ]
    const expiryDate = [
        { label: '10-10-2025'},
        { label: '14-4-2026'},
        { label: '22-4-2027'},
        
    ]

    const rows =[
        {doc:1,department:'Genetic', member:'Dr Ram sing',itemCode:3423, itemDescription:"Yellow-Tip",quantity:104,expiryDate:'12-2-2025'},
        {doc:2,department:'Genetic',  member:'Dr Ram sing',itemCode:3423, itemDescription:"Yellow-Tip",quantity:1064,expiryDate:'12-2-2025'},
        {doc:3,department:'Genetic',  member:'Dr Ram sing',itemCode:3423, itemDescription:"Yellow-Tip",quantity:1064,expiryDate:'12-2-2025'},
        {doc:4,department:'Genetic',  member:'Dr Ram sing',itemCode:3423, itemDescription:"Yellow-Tip",quantity:1064,expiryDate:'12-2-2025'},
    ]
// ================================================================open Dialog api & Update code here =====================================================
   const  handleOpenDialog =(rowdata)=>{
    setUpdate(rowdata)
    setShowDialog(true); // Open the dialog
    
    
   }
    const updateData=(e)=>{
        setUpdate({...update,[e.target.name]:e.target.value});
    }
// =======================================================================Delete Dialog and api code here ======================================================================
  const handleDeleteDialog = (rowdata)=>{
    // setDeleteRow(rowdata)
    setAlert(true)
}
    return (
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
          <Dashhead id={5} display={display} />
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
              stock-out
            
            </h1>
{/* ==================================================================open Dialog code here ===================================================== */}

                  <form>
                        {/* Thsi Diloag box for Delete Alert  */}
       
            {alert && (
              <Dialog open={alert} style={{ height: 600 }}>
                <DialogTitle>Delete Row</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are You sure You want to delete this.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button variant="contained">
                  {/* <Button variant="contained" onClick={() => deleteRow(update)}> */}
                    Yes
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      setAlert(false);
                    }}
                  >
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            )}
        {update && 
        (
            <Dialog open={showDialog}  fullWidth
        >
                <DialogTitle className='text-center'>Update Data</DialogTitle>
                <DialogContent>
                    <div className="row mt-4">
                    <div className="col-auto">
                     <TextField id='outlined-basic' label="Doc" sx={{width:120}} value={update.doc} />
                      </div>
                        <div className="row">
                        <div className="col-auto">
                      <Autocomplete
                    disablePortal
                    value={update.department}
                    id="combo-box-demo"
                     options={Department}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} label="Select department" required  />}
                    
                    />
                        </div>
                      
                      </div>
                      
                      <div className="row mt-4 mx-2">
                   
                      <div className="col">
                      <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    value={update.itemDescription}
                     options={Product}
                    sx={{width:550}}
                    renderInput={(params) => <TextField {...params} label="Select item code,Product name" required/>}
                    
                    />
                      </div>
                      <div className="col mt-3">
                      <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    value={update.member}
                     options={Member}
                    sx={{width:550}}
                    renderInput={(params) => <TextField {...params} label="Select member" required/>}
                    
                    />
                      </div>
                      </div>
                      <div className="row mt-4 mx-2">
                   
                      <div className="col">
                     <TextField id="outlined-basic" label="Quantity" sx={{width:550}} value={update.quantity} name='quantity' onChange={updateData} />
                      </div>
                      </div>
                      <div className="row mt-4 mx-2">
                   
                      <div className="col">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ width: 550 }}
                    
                    label="Choose expiry date"
                    value={dayjs(update.date)}
                    onChange={(newValue) => {
                      setSelectedDate(newValue);
                    }}
                    required
                    renderInput={(params) => (
                      <TextField name="date" {...params} />
                    )}
                    
                  />
                </LocalizationProvider>
                      </div>
                      </div>
                     
                    </div>
                  
                </DialogContent>
                <DialogActions>
                  <Button type="submit" variant="contained" >
                    Update
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                        setShowDialog(false);
                    }}
                    >
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
        )
        
        } 
           
                      </form>


{/* ==================================================================Form code here ===================================================== */}

            <form>
          
            <div className="d-flex flex-column align-items-center">
                <div className="row">
                    <div className="col-auto"><TextField id='outlined-basic' label="Doc" type='number' sx={{width:180}}></TextField></div>
                    <div className="col-auto"> 
                     <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                     options={Department}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Department" />}
                    />
                    </div>
                    <div className="col-auto"> 
                     <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                     options={Member}
                    sx={{ width: 350 }}
                    renderInput={(params) => <TextField {...params} label="Members" />}
                    />
                    </div>
                  
                    
                </div>
                <div className="row my-3 d-flex flex-row ">
                    <div className="col-auto">
                   
                    <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                     options={Product}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} label="Select item code,Product name" required/>}
                    
                    />
                  
                    </div>
                    <div className="col-auto"><TextField id='outlined-basic' label="Quantity" type='number' sx={{width:120}} required></TextField></div>
                    <div className="col-auto" > 
                    <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                     options={expiryDate}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Select expiry date" required/>}
                    
                    />
                </div>
                </div>
            </div>
            <div className='text-center my-5'>

                <Button variant="contained" type= "submit" className=''>Add</Button>
            </div>
            </form>
{/* ==================================================================Table ===================================================== */}

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Doc</TableCell>
            <TableCell >Department</TableCell>
            <TableCell >Member</TableCell>
            <TableCell >Item code</TableCell>
            <TableCell >Item description</TableCell>
            <TableCell >Quantity</TableCell>
            <TableCell >Expiry date</TableCell>
            <TableCell >Edit</TableCell>
            <TableCell >Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            {
                rows.map((row)=>(
                    <TableRow key={row.doc}>
                    <TableCell >{row.doc}</TableCell>
                    <TableCell >{row.department}</TableCell>
                    <TableCell >{row.member}</TableCell>
                    <TableCell >{row.itemCode}</TableCell>
                    <TableCell >{row.itemDescription}</TableCell>
                    <TableCell >{row.quantity}</TableCell>
                    <TableCell >{row.expiryDate}</TableCell>
                    <TableCell ><IconButton onClick={()=>{handleOpenDialog(row)}}  ><EditIcon color='primary'  /></IconButton> </TableCell>
                    <TableCell ><IconButton > <DeleteIcon color='error'onClick={()=>{handleDeleteDialog(row)}} /> </IconButton></TableCell>
                    </TableRow>
                ))
            }


        </TableBody>
      </Table>
    </TableContainer>
    <div className="text-center my-3">
 <Link to ="/Stockoutpdf"><Button variant='contained' type='button' color='success'>Print  <PrintIcon className='mx-2' /></Button> </Link>
    </div>
            </div>
            <Darkmode/>
            </div>
      )
}

export default Stockout
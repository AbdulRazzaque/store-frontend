import React, { Fragment } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dashhead from "../components/Dashhead";
import Darkmode from "../components/Darkmode";
import { Button, TextField } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Addproduct = () => {
  // const { darkMode } = useContext(ThemeContext);
  const [display, setDisplay] = React.useState(false);
  const columns = [
    { field: 'id', headerName: 'S.N', width: 70 },
    { field: 'itemdescription', headerName: 'Item description', width: 180 },
    { field: 'physicallocation', headerName: 'Physical location', width: 130 },
    { field: 'sku', headerName: 'S.K.U', width: 130 },
    { field: 'lotnumber', headerName: 'Lot number', width: 130 },
    { field: 'manufacture', headerName: 'Manufacture', width: 130 },
    { field: 'suppliername', headerName: 'Supplier name', width: 130 },
    {
      title: "Action",
      field: "Action",
      width: 100,
      renderCell: () => (
        <Fragment>
          <Button >
            <EditIcon />
          </Button>
        </Fragment>
      ),
    },
    {
      title: "Delete",
      field: "Delete",
      width: 100,
      renderCell: () => (
        <Fragment>
          <Button color="error" >
            <DeleteIcon />
          </Button>
        </Fragment>
      ),
    },
  
  ];
  
  const rows = [
    { id: 1, itemdescription: 'Yellow tip', physicallocation: '13B', sku: 3544,lotnumber:32455,manufacture:"Glovet",suppliername:"Dousri" },
    { id: 2, itemdescription: 'Alcohol Mexo', physicallocation: '23B', sku: 2342 ,lotnumber:32455,manufacture:"Glovet",suppliername:"Dousri"},
    { id: 3, itemdescription: 'Vitamin A', physicallocation: '54B', sku: 45432,lotnumber:32455,manufacture:"Glovet",suppliername:"Dousri" },
    { id: 4, itemdescription: 'B Bag', physicallocation: '13B', sku: 1624 ,lotnumber:32455,manufacture:"Glovet",suppliername:"Dousri"},
    { id: 5, itemdescription: '10ml Syringe', physicallocation: '13B', sku: 43234,lotnumber:32455,manufacture:"Glovet",suppliername:"Dousri" },
    { id: 6, itemdescription: 'De Tox-L', physicallocation: '13B', sku: 14450,lotnumber:32455,manufacture:"Glovet",suppliername:"Dousri" },
    { id: 7, itemdescription: 'Facemask Normal ', physicallocation: '13B', sku: 4553,lotnumber:32455,manufacture:"Glovet",suppliername:"Dousri" },
    { id: 8, itemdescription: 'Ornipura', physicallocation: '13B', sku: 3633,lotnumber:32455,manufacture:"Glovet",suppliername:"Dousri" },
    { id: 9, itemdescription: 'Buscopan', physicallocation: '13B', sku: 65334,lotnumber:32455,manufacture:"Glovet",suppliername:"Dousri" },
   
  ];
  
  return (
    <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
      <Dashhead id={2} display={display} />
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
      Add Product
        </h1>
<form>


        <div className="container d-flex  flex-column  align-items-center">
          <div className="row my-2">
            <div className="col">
            <TextField id="outlined-basic" label="Item code" variant="outlined" 
            sx={{width:250}} required
            />
            </div>
            <div className="col">
            <TextField id="outlined-basic" label="Enter product name" variant="outlined"  sx={{width:250}}  required/>
           
            </div>
          
          </div>
          <div className="row my-2">
            <div className="col">
            <TextField id="outlined-basic" label="Physical location" variant="outlined" 
            sx={{width:250}} required
            />
            </div>
            <div className="col">
            <TextField id="outlined-basic" label="S.K.U" variant="outlined"  sx={{width:250}}  required/>
           
            </div>
          
          </div>
          <div className="row my-2">
            <div className="col">
            <TextField id="outlined-basic" label="Lot number" variant="outlined" 
            sx={{width:250}} 
            />
            </div>
            <div className="col">
            <TextField id="outlined-basic" label="Manufacturer" variant="outlined"  sx={{width:250}}  required/>
           
            </div>
          
          </div>
          <div className="row my-2">
            <div className="col">
            <TextField id="outlined-basic" label="Supplier name" variant="outlined" 
            sx={{width:250}} 
            required
            />
            </div>
            <div className="col">
            <TextField id="outlined-basic" label="Add model" variant="outlined"  sx={{width:250}}  required/>
           
            </div>
          
          </div>
          <Button variant="contained" type="submit" className="my-5">Submit</Button>
        </div>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { psku: 0, pskuSize: 5 },
          },
        }}
        pskuSizeOptions={[5, 10]}
      />
    </div>
        </form>
      
        <Darkmode/>
        </div>
       
        </div>
  )
}

export default Addproduct
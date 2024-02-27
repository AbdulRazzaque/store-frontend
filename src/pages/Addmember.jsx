import React, { Fragment } from 'react'
// import "./Home.scss";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dashhead from "../components/Dashhead";
import Darkmode from '../components/Darkmode';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Addmember = () => {
  const [display, setDisplay] = React.useState(false);
  const [department, setDepartment] = React.useState('');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  const columns=[
    {field:"id",headerName:"S.N",width:70},
    {field:"memberName",headerName:"Member name",width:150},
    {field:"department",headerName:"Department"},
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
  
  ]
  const rows =[
  {  id:1,memberName:'Mustaqim',department:"Genitic"},
  {  id:2,memberName:'LJ',department:"Genitic"},
  {  id:3,memberName:'May',department:"Micro"},
  {  id:4,memberName:'Mutto',department:"Central"},
  {  id:5,memberName:'Mustaqim',department:"Genitic"},
  ]
  return (
    <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
      <Dashhead id={3} display={display} />
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
          Add Member 
        
        </h1>
        <form>
        <div className="container d-flex flex-column align-items-center">
          <div className="row">
            <div className="col">
            <TextField id="outlined-basic" label="Member name" variant="outlined"  sx={{width:250}}  required/>

            </div>
          </div>
          <div className="row my-3">
            <div className="col">
            {/* <TextField id="outlined-basic" label="Department" variant="outlined"  sx={{width:250}}  required/> */}
            <FormControl sx={{width:250}}>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="department"
          onChange={handleChange}
        >
          <MenuItem value="TCGC">TCGC</MenuItem>
          <MenuItem value="Microbiology">Microbiology</MenuItem>
          <MenuItem value="Parasitology">Parasitology</MenuItem>
          <MenuItem value="Central">Central</MenuItem>
          {/* <MenuItem value="Parasitology">Histology</MenuItem> */}
        </Select>
      </FormControl>

            </div>
          </div>
          <Button variant="contained" type="submit" className='my-3' >
          submit
          </Button>
        </div>
        </form>
        
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
        </div>
       
        <Darkmode/>
        </div>
  )
}

export default Addmember
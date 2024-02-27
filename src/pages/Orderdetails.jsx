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

const Orderdetails = () => {
  const [display, setDisplay] = React.useState(false);
  const [department, setDepartment] = React.useState('');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };



  const columns=[
    {field:"id",headerName:"S.N",width:70},
    {field:"refno",headerName:"Ref no",width:150},
    {field:"department",headerName:"Department",width:150},
    {field:"orderIssueDate",headerName:"Order issue date",width:150},
    {
        field: 'status',
        headerName: 'Status',
    width:180,
        renderCell: (params) => (
          <StatusDropdown
            value={params.row.status}
            onChange={(e) => handleStatusChange(e, params.row.id)}
          />
        ),
      },
   
  
  ]
  const StatusDropdown = ({ value, onChange }) => {
    return (
      <FormControl fullWidth>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          labelId="status-label"
          id="status-select"
          value={value}
          onChange={onChange}
        >
          <MenuItem value="completed">
          <span style={{ color: 'green' }}>Completed</span>
          </MenuItem>
          <MenuItem value="progress">
          <span style={{ color: 'red' }}>In Progress</span>
          </MenuItem>
        </Select>
      </FormControl>
    );
  };
  
  const handleStatusChange = (event, id) => {
    // Handle status change
    console.log(`Row with id ${id} has new status: ${event.target.value}`);
  };
  const rows = [
    { id: 1,refno:"3434",department: "Genetic" ,orderIssueDate:"2/3/2024"},

  ];

  return (
    <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
      <Dashhead id={9} display={display} />
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
        Order Details
        
        </h1>

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

export default Orderdetails
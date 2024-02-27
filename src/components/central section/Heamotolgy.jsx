import React, { Fragment, useState } from 'react'
// import './stock.css'
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dashhead from '../Dashhead';
import Darkmode from '../Darkmode';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx'
import GetAppIcon from '@mui/icons-material/GetApp';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
const Heamotolgy = () => {
  const [display, setDisplay] = React.useState(false);
  const [department, setDepartment] = React.useState('');
  const [rows ,setRows]= useState( [
    { id: 1, itemcode: "C123", productName: "Vitamin C", quantity: "23", expiry: "2/3/2024", sku: "2342", lotNumber: "343223", manufacturer: "GPS" },
    { id: 2, itemcode: "P456", productName: "Painkiller", quantity: "50", expiry: "5/12/2023", sku: "9876", lotNumber: "998877", manufacturer: "PharmaCo" },
    { id: 3, itemcode: "S789", productName: "Sunscreen", quantity: "10", expiry: "7/8/2025", sku: "5432", lotNumber: "112233", manufacturer: "SunCare" },
    { id: 4, itemcode: "A321", productName: "Antibiotic", quantity: "100", expiry: "10/6/2023", sku: "1111", lotNumber: "445566", manufacturer: "MediTech" },
    { id: 5, itemcode: "H654", productName: "Hand Sanitizer", quantity: "75", expiry: "3/9/2024", sku: "9999", lotNumber: "778899", manufacturer: "CleanHands Inc." },
    { id: 6, itemcode: "M987", productName: "Multivitamin", quantity: "30", expiry: "12/15/2023", sku: "8888", lotNumber: "223344", manufacturer: "HealthWise" },
    { id: 7, itemcode: "B246", productName: "Bandages", quantity: "200", expiry: "6/20/2024", sku: "7777", lotNumber: "667788", manufacturer: "MediAid" },
    { id: 8, itemcode: "L369", productName: "Laxative", quantity: "15", expiry: "8/7/2023", sku: "6666", lotNumber: "556677", manufacturer: "ReliefPharma" },
    { id: 9, itemcode: "E987", productName: "Eye Drops", quantity: "40", expiry: "4/30/2024", sku: "5555", lotNumber: "990011", manufacturer: "EyeCare Ltd." },
    { id: 10, itemcode: "T789", productName: "Thermometer", quantity: "5", expiry: "9/10/2025", sku: "4444", lotNumber: "112233", manufacturer: "TempTech" },
    { id: 11, itemcode: "F246", productName: "Facial Cleanser", quantity: "35", expiry: "11/25/2024", sku: "3333", lotNumber: "778899", manufacturer: "BeautyCare" },
    { id: 12, itemcode: "D753", productName: "Dental Floss", quantity: "60", expiry: "6/30/2023", sku: "2222", lotNumber: "112233", manufacturer: "DentAid" },
    { id: 13, itemcode: "W951", productName: "Wound Dressing", quantity: "25", expiry: "9/15/2025", sku: "1111", lotNumber: "445566", manufacturer: "MediCare" },
    { id: 14, itemcode: "R864", productName: "Rubbing Alcohol", quantity: "100", expiry: "8/10/2023", sku: "9999", lotNumber: "990011", manufacturer: "CleanMed" },
    { id: 15, itemcode: "O753", productName: "Omega-3 Supplements", quantity: "50", expiry: "4/5/2024", sku: "8888", lotNumber: "667788", manufacturer: "NutriHealth" },
    { id: 16, itemcode: "T222", productName: "Toothpaste", quantity: "40", expiry: "10/20/2024", sku: "7777", lotNumber: "223344", manufacturer: "DentaFresh" },
    { id: 17, itemcode: "G951", productName: "Gauze Pads", quantity: "75", expiry: "7/15/2025", sku: "6666", lotNumber: "556677", manufacturer: "MediSupplies" },
    { id: 18, itemcode: "E753", productName: "Ear Drops", quantity: "20", expiry: "5/30/2023", sku: "5555", lotNumber: "998877", manufacturer: "EarCare Ltd." },
    { id: 19, itemcode: "S444", productName: "Syringes", quantity: "200", expiry: "12/1/2024", sku: "4444", lotNumber: "334455", manufacturer: "MediEquip" },
    { id: 20, itemcode: "B789", productName: "Burn Cream", quantity: "30", expiry: "3/8/2024", sku: "3333", lotNumber: "112233", manufacturer: "BurnAid" },
  ])
  const handleChange = (event) => {
    setDepartment(event.target.value);
  };



  const columns=[
    {field:"id",headerName:"S.N",width:70},
    {field:"itemcode",headerName:"Item code",width:150},
    {field:"productName",headerName:"Product name",width:150},
    {field:"quantity",headerName:"Quantity",width:150},
    {field:"expiry",headerName:"Expiry",width:150},
    {field:"sku",headerName:"S.K.U",width:150},
    {field:"lotNumber",headerName:"Lot number",width:150},
    {field:"lotNumber",headerName:"Lot number",width:150},
    {field:"manufacturer",headerName:"Mnufacturer",width:150},
 
  ]
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([excelBuffer], { type: 'application/octet-stream' }), 'Heamotolgy stock.xlsx');
  };

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
      Heamotolgy stock
        
        </h1>
        <div className='icondiv'>
      <Tooltip title="Export in xl"> <GetAppIcon className='exporticon' onClick={handleExport} /></Tooltip> 
        </div>
        <div style={{ height: '100%', width: '100%' }}>
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

export default Heamotolgy


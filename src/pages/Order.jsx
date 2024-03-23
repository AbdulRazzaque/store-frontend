
import React, { useEffect, useState } from 'react'
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import Dashhead from "./Dashhead";
import Dashhead from "../components/Dashhead";

import { Autocomplete, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { sendData } from '../components/app/socket/socketActions';

import {  useHistory } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
const Order = () => {
    const [display, setDisplay] = React.useState(false);
    const data = useSelector(state => state.socket.messages)
    // const chackdata = useSelector(state => state)
    console.log(data,'Chack lab name')
    const [allMember,setAllMember] = React.useState([])
    const [quantities, setQuantities] = useState({});
    const [orderData,setOrderData] = useState()
    const [membername,setMemberName]=useState([])
    const dispatch = useDispatch()
    const history = useHistory()
    const Member = [
      { label: 'Mustaquem'},
      { label: 'Dr.Mutto'},
      { label: 'Dr.Marwa'},
      { label: 'Roy' },
    ]
    console.log(allMember)
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiX2lkIjoiNjVlODZiNzZmOTk0ZmQzZTdmNDliMjJiIiwiaWF0IjoxNzA5NzkzMDcwfQ.siBn36zIBe_WmmIfuHMXI6oq4KMJ4dYaWQ6rDyBBtEo"

  console.log(membername,"Member name")
const handleQuantityChange = (itemId, event) => {
  const { value } = event.target;
 
  setQuantities(prevQuantites =>({
    ...prevQuantites,
    [itemId]:value,
  }));
  const newData = data.map(group =>
    group.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          userQuantity: value,
          
        };
      }
      return item;
    })
  );

  // Update OrderData state with the new data
  setOrderData(newData);
}
const handleOrderSubmit = () => {
  // Combine original data with user quantities
  const newDataWithQuantities = data.map(group =>
      group.map(item => ({
          ...item,
          userQuantity: quantities[item.id] || 0, // Set user quantity to 0 if not found
         
      }))
  );

  // Dispatch an action to send the data to Redux
  dispatch(sendData({ orderData: newDataWithQuantities,membername}));
     history.push('/Orderpdf');
};
// dispatch(updateData(newData));
console.log(orderData,"Cheack here Order Data")
// ===============================================Member api=============================================================
const getAllMember = ()=>{
  axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/member/getAllMember/`,{headers:{token:`${accessToken}`}})
  .then(res=>{
    setAllMember(res.data.result)

  })
}

useEffect(()=>{
  getAllMember()
},[])
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
          order list 
        
        </h1>
        <div>
<form action="">
<div className="d-flex justify-content-center my-5">
<Autocomplete
                    disablePortal
                    id="combo-box-demo"
                     options={allMember}
                    sx={{width:550}}
                    getOptionLabel={(memberName)=>memberName.memberName}
                   onChange={(ev,val)=>{
                    setMemberName(val.memberName)
                   }}
                    renderInput={(params) => <TextField {...params} label="Select member" required/>}

                    
                    />
</div>

<table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">S.N</th>
      {/* <th scope="col">Expiry</th> */}
      {/* <th scope="col">Item Code</th> */}
      <th scope="col">Lot Number</th>
      <th scope="col">Manufacturer</th>
      <th scope="col">Product Name</th>
      {/* <th scope="col">Quantity</th> */}
      <th scope="col">SKU</th>
      <th scope="col">Required Quantity</th> {/* Assuming you want to add actions */}
    </tr>
  </thead>
  <tbody>
  {data.map((itemGroup, groupIndex) => {   
    if (Array.isArray(itemGroup)) {
      return itemGroup.map((item, itemIndex) => (
        <tr key={itemIndex}>
          <td>{item.id}</td>
          {/* <td>{item.expiry}</td> */}
          {/* <td>{item.itemcode}</td> */}
          <td>{item.lotNumber}</td>
          <td>{item.manufacturer}</td>
          <td>{item.productName}</td>
          {/* <td>{item.quantity}</td> */}
          <td>{item.sku}</td>
          <td>
            <input
              type="number"
              className='form-control' id="exampleInputEmail1" aria-describedby="emailHelp"
              value={quantities[item.id] || ''}
              required
              onChange={e => handleQuantityChange(item.id, e)}
              placeholder="Enter quantity"
            />
          </td>
        </tr>
      ));
    } else {
      return null; // Handle case where itemGroup is not an array
    }
  })}
</tbody>

</table>
<div className='text-center my-5'>
<Button variant='contained' type='submit' onClick={handleOrderSubmit} > Print PDF <PictureAsPdfIcon className='mx-2'/> </Button>
</div>
</form>
  </div>
        </div>
        </div>
  )
}

export default Order
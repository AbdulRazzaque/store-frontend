import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../pages/pdf.scss';
import header from '../../image/orderheader.png'
import './orderpdf.css'
const Orderpdf = () => {
    const orderData = useSelector(state =>state.socket.messages[0].orderData)
    const MemberData = useSelector(state =>state.socket.messages[0].membername)
    console.log(orderData,"This is Order pdf")
    console.log(MemberData,"This Member name")
    useEffect(()=>{
      setTimeout(()=>{
         
        window.print()
      },1000)
    },[])
    console.log(orderData[0][0].labName,"Get Lab name")
  return (

    <div className='container'>
        <div className="row container d-flex justify-content-center text-center">
            <div className="col-12">
            <div className=" image-container">
                      <img src={header} alt="Thabr" className='full-width-image' />
                    </div>
            </div>
        </div>
        <div className="row my-5 sideTitle">
                  <div className="col text-left"><p><b>Ref.No:</b> <span>G24-01001</span></p></div>
                  <div className="col text-right mr-5"><p><b>Date:</b> <span>2-3-2025</span></p></div>
                </div>
        <div className="row my-5 sideTitle">
                  <div className="col text-left"><p><b>Topic: </b><span>Request of purchase<b> Tharb lab store</b></span></p></div>
                </div>
        <div className="row my-5 sideTitle">
                  <div className="col text-left"><p><b>Dear Dr.Ashraf: </b></p></div>
                </div>
                <div className="row my-5  ml-5 sideTitle">
                  <div className="col text-left"><p>Kindly apporve and proceed for this purchase request from <b>{orderData[0][0].labName}.</b> The list of request items is requested items is listed below:</p></div>
                </div>
        <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col">ID</th>
   
    

        <th scope="col">Item description</th>
     
        <th scope="col">S.K.U</th>
        <th scope="col">Quantity</th> {/* Assuming you want to add actions */}
      </tr>
    </thead>
    <tbody>
    {orderData.map((itemGroup, groupIndex) => {   
      if (Array.isArray(itemGroup)) {
        return itemGroup.map((item, itemIndex) => (
          <tr key={itemIndex}>
            <td>{item.id}</td>
            <td>{item.productName}</td>

            <td>{item.sku}</td>
            <td>{item.userQuantity}</td>
           
          </tr>
        ));
      } else {
        return null; // Handle case where itemGroup is not an array
      }
    })}
  </tbody>
  
  </table>
  
  <div className="row my-5 sideTitle  fixed-bottom orderfooter">
                  <div className="col-12 text-left"><p><b>Thank you</b></p></div>
                  <div className="col-12 text-left my-5"><p><b>Best Regards</b></p></div>
                  <div className="col-12 text-left my-5"><p><b>Requested by {MemberData}</b></p></div>
                </div>
  </div>
  )
}

export default Orderpdf
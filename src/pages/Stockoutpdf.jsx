import React, { useEffect } from 'react';
import './pdf.scss';
import logo from '../image/logo.png';
import header from '../image/header.png';
import foot from '../image/foot.png';

const Stockoutpdf = () => {
  useEffect(() => {
    window.print();
  }, []);

  const TableData = [
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
    { id: 1,itemcode:"G123" ,itemdiscription: "Yellow-Tip", unit: "Box", quantity: "4" },
  
    // More data...
  ];

  return (
    <div className='container'>
      <div className="row my-5">
        <table className=" table table-borderless">
          <thead>
            <tr>
              <th colSpan="10">
                <div className="">
                  <div className="row">
                    <div className="col-12">
                    <div className=" image-container">
                      <img src={header} alt="Thabr" className='full-width-image' />
                    </div>
                    </div>
                 
                    
                  </div>
                </div>
                <div className="row my-5 sideTitle">
                  <div className="col text-left"><p><b>Date:</b> <span>2-3-2025</span></p></div>
                  <div className="col text-right mr-5"><p><b>Department:</b> <span>Genitic</span></p></div>
                </div>
              </th>
            </tr>
            <tr className='table-bordered'>
              <th className='text-center table-bordered'>S.N</th>
              <th className='text-center table-bordered'>Item code</th>
              <th className='text-center table-bordered'>Item description</th>
              <th className='text-center table-bordered'>Unit</th>
              <th className='text-center table-bordered'>Quantity</th>
            </tr>
          </thead>
          <tbody className='table-bordered'>
            {TableData.map((row, index) => (
              <tr key={index + 1} className='table-bordered'>
                <td className='text-center table-bordered'>{index + 1}</td>
                <td className='text-center table-bordered'>{row.itemcode}</td>
                <td className='text-center table-bordered'>{row.itemdiscription}</td>
                <td className='text-center table-bordered'>{row.unit}</td>
                <td className='text-center table-bordered'>{row.quantity}</td>
              </tr>
            ))}
          </tbody>
     
          <tfoot>
    <tr >
      <td colSpan="10">
        <div className="row sideTitle">
          <div className="col text-left"><p><b>Requested by</b></p></div>
          <div className="col text-right mr-5"><p><b>Approved by</b></p></div>
        </div>
        <div className="row sideTitle my-5">
          <div className="col text-left"><p><b>Release by</b></p></div>
          <div className="col text-right mr-5"><p><b>Store keeper</b></p></div>
        </div>
    <img src={foot} alt="Thabr" className='full-width-image' />
      </td>
    </tr>
  </tfoot>
        </table>
      </div>
    
    </div>
  );
}

export default Stockoutpdf;

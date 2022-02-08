import React from 'react';
import { useLocation } from "react-router-dom";
import './styles/GetInvoice.css'; 


function GetInvoice() {
  
    let newDate = new Date()
    let date = newDate.toLocaleDateString();

   const generateId = Math.floor(100000 + Math.random() * 900000);


   const location = useLocation();
   const cusID = location.cusData.id;
   const cusName = location.cusData.name;
   const pList = location.packages.filter(obj => obj.customerid == cusID);
 
    //const getTotalPrice = 0;
   // const getTotalWeight = 0;

     const getTotalPrice =  pList.reduce((total,item) =>  total = total + item.price , 0 );

    const getTotalWeight = pList.reduce((total,item) =>  total = total + parseInt(item.weight.replace(/\D/g,'')) , 0 ) + "Kg";
    
   
    return (


        
        <div className="div_wrap">

            <table>
                <tbody>
                    <tr>
                        <td className="dt_left">
                            {date}
                        </td>
                        <td className="lg_text">
                            Invoice
                        </td>
                    </tr>

                    <tr>
                        <td className="dt_left">
                            {cusName}
                        </td>
                        <td>
                            No. {generateId}
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>&nbsp;</p>
            <div className="div_price_wrap">
            <table id="tblPrice">
                <thead>

                    <tr>
                        <th className="td_p">ID</th>
                        <th className="td_center" style={{ textAlign: "center" }}>Weight</th>
                        <th className="td_p td_bg">Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {pList.map((row) => {
                        return (

                            <tr>
                                <td className="td_p">{row.id}</td>
                                <td className="td_center" >{row.weight}</td>
                                <td className="td_p td_bg">{row.price}</td>

                            </tr>
                        );
                    })}
                </tbody>

                <tfoot>
                    <tr>
                        
                        <td colSpan={2} className="td_center td_total" >{getTotalWeight}</td>
                        <td className="lg_text td_bg">Total: {getTotalPrice}</td>
                    </tr>
                </tfoot>
            </table>

            <div className="div_btm">

                <p className="p_btm">You received {pList.length} packages <br />Thank you for using our services                
                </p>
            
            
            </div>
           
            </div>
            
        </div>
        
    );
}

export default GetInvoice;
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowUpward from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownward from '@mui/icons-material/ArrowDownwardRounded';

import AddPackageModal from './modals/AddPackageModal';

function Packages({ appData }) {

  const [list, updateList] = useState(appData.packages);

  const [customerList, setCustomerList] = useState(appData.customers);

  const getCustomerName = cus_id => {
    let cust = customerList.find(obj => obj.id === cus_id );
    
    return cust ? cust.name:'';
  
  };

  const handleUpward = e => {

    let itemIndex = e.target.getAttribute("name");

    if(!itemIndex)
      return;

    let updatedOrderList = list;
    let shipOrderTemp = updatedOrderList[itemIndex].shippingOrder;
    let upIndex = itemIndex == 0 ? updatedOrderList.length-1 : itemIndex-1;
    
    updatedOrderList[itemIndex].shippingOrder = updatedOrderList[upIndex].shippingOrder;
    updatedOrderList[upIndex].shippingOrder = shipOrderTemp;
   
    updateList([...updatedOrderList]);
};

const handleDownward = (e) => {

  let itemIndex = e.target.getAttribute("name");

  let x = e.target.getAttribute('data-value');

  if(!itemIndex)
    return;

  let updatedOrderList = list;
  let shipOrderTemp = updatedOrderList[itemIndex].shippingOrder;
  let upIndex = itemIndex == updatedOrderList.length-1 ? 0 : parseInt(itemIndex) + 1;
  
  updatedOrderList[itemIndex].shippingOrder = updatedOrderList[upIndex].shippingOrder;
  updatedOrderList[upIndex].shippingOrder = shipOrderTemp;
  
  updateList([...updatedOrderList]);
};


    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Price</TableCell>
            
              <TableCell>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >    
                  <AddPackageModal list={list} updateList={updateList} customerList={customerList}   />

                 

                </IconButton></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {list.sort((a, b) => a.shippingOrder > b.shippingOrder ? 1:-1).map((row, index) => {

              return (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                 
                  <TableCell >{getCustomerName(row.customerid)}</TableCell>
                  <TableCell >{row.weight}</TableCell>

                  <TableCell >{row.price}</TableCell>

                  <TableCell >                   
                  
                  <Button  style={{ margin: "0px 10px 0px 0px" }} variant='contained' name={index} onClick={handleUpward} ><ArrowUpward style={{ pointerEvents: "none"}} /></Button> 
                  
                   <Button variant='contained' name={index} onClick={handleDownward} ><ArrowDownward  style={{ pointerEvents: "none"}} /></Button> 
              
         </TableCell>

                </TableRow>
              )
            })} 
          </TableBody>
        </Table>
      </TableContainer>

        );
    }
    
export default Packages;


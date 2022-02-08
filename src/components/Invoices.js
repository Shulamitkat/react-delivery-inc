import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Invoices({ appData }) {

  const customerList = appData.customers;
  const packageList =  appData.packages;
  
  
  const getTotal = (cus_id, type) => {

    let custPackageList = packageList.filter(obj => obj.customerid === cus_id );

    let total;

    if(type == "w")
      total = custPackageList.reduce((total,item) =>  total = total + parseInt(item.weight.replace(/\D/g,'')) , 0 );
    else
     total = custPackageList.reduce((total,item) =>  total = total + item.price , 0 );

    return total ? total:'0';
  
  };

    return(
            

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>                
              <TableCell>Customer Name</TableCell>
              <TableCell>Total Weight</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerList.map((row) => {

              return (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                <TableCell >{row.name}</TableCell>
                <TableCell >{getTotal(row.id,'w')}</TableCell>
                <TableCell >{getTotal(row.id,'p')}</TableCell>
                
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
        );
    }
    
export default Invoices;
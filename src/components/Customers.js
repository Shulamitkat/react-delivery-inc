import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';

function Customers({ appData }) {

  const [list, updateList] = useState(appData.customers);

  const handleDeleteItem = id => {
    updateList(list.filter(item => item.id != id));
  };


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => {
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>

                   <Link to={
                    {
                      pathname: '/getInvoice',                                      
                      cusData : row,
                      packages: appData.packages

                    }
                  }
                     style={{ textDecoration: "none" }}><Button variant='contained' >Create Invoice</Button></Link>

                </TableCell>
                <TableCell>
                  <Button variant='contained' onClick={() => { if (window.confirm('Are you sure you want to delete this customer?')) handleDeleteItem(row.id) }} >Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Customers;
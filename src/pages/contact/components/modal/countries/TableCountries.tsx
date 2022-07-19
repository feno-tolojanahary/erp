

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  code: string,
) {
  return { name, code };
}

const rows = [
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
  createData('country name', "CODE"),
];

export default function TableCountries() {
  return (
    <TableContainer component={Paper} className="max-h-[53rem] overflow-scroll ">
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country Name</TableCell>
            <TableCell>Country Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

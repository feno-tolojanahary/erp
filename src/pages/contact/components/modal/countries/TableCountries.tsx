import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Country } from "@interfaces/general";

type Props = {
  countries: Country[],
  onSelected: (selected: Country) => void
}

export default function TableCountries({
  countries,
  onSelected
}: Props) {

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
          {countries.map((row: Country) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="hover:bg-[#eeeeee] hover:cursor-pointer"
              onClick={() => onSelected(row)}
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

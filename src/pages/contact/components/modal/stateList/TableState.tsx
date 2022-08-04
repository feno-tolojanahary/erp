import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { State } from "@interfaces/general";

type Props = {
  rows: State[],
  onSelected: (row: State) => void
}

export default function ModalState({
  rows,
  onSelected
}: Props) {

  return (
    <TableContainer component={Paper} className="max-h-[53rem] overflow-scroll ">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>State Name</TableCell>
            <TableCell>State Code</TableCell>
            <TableCell>Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: State) => (
            <TableRow
              key={row.stateName}
              className="hover:bg-[#eeeeee] hover:cursor-pointer"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => onSelected(row)}
            >
              <TableCell component="th" scope="row">
                {row.stateName}
              </TableCell>
              <TableCell>{row.stateCode}</TableCell>
              <TableCell>{row.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

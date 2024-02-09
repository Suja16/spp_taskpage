'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NextLink from 'next/link';
import { Box, Container, Hidden } from '@mui/material';
import SpringModal from '@/components/popup';
import Link from 'next/link';


const columns = [
  { id: 'task', label: 'Task' },
  { id: 'tag', label: 'Tag' },
  { id: 'priority', label: 'Priority' },
  { id: 'startDate', label: 'Start Date' },
  { id: 'endDate', label: 'End Date' },
  { id: 'status', label: 'Status' },
  { id: 'actions', label: 'Actions' },
];
const rows = [
  { task: 'AC1975018561', tag: 'Deposit', priority: 'Low', startDate: '1/10/2023', endDate: '24/10/2023', status: 'Assigned' },
  { task: 'ACI 975018561', tag: 'Deposit', priority: 'Medium', startDate: '1/10/2023', endDate: '24/10/2023', status: 'Assigned' },
];

export default function Task() {
  return (
    <Container maxWidth="xl-lg" sx={{ mt: 8, }}>
      <Box sx={{margin:'0vw 5vw'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Tasks</h1>
        <SpringModal/>
      </div>

      <Paper style={{ height: 500, width: '100%', background: 'transparent', boxShadow: 'none', border: 'none' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.task}</TableCell>
                  <TableCell>{row.tag}</TableCell>
                  <TableCell>{row.priority}</TableCell>
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.endDate}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Link href={'/TaskDetails'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
                    </svg>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      </Box> 
    </Container>
  );
}

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
import { Box, Chip, Container, Hidden } from '@mui/material';
import SpringModal from '@/components/popup';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import client from 'lib/apollo-client';
import { gql } from '@apollo/client';





const GET_DATA=gql`
query MyQuery {
  tasks{
    id
    tags
    priority
    startDate
    endDate
    status
  }
}
`;


const columns = [
  { id: 'tasks', label: 'Task' },
  { id: 'tag', label: 'Tag' },
  { id: 'priority', label: 'Priority' },
  { id: 'startDate', label: 'Start Date' },
  { id: 'endDate', label: 'End Date' },
  { id: 'status', label: 'Status' },
  { id: 'actions', label: 'Actions' },
];


export default function Task() {
  const { loading, error, data } = useQuery(GET_DATA, { client });

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    console.error("Error fetching tasks:", error);
    content = <p>Error!</p>;
  } else {
    const tasks = data?.tasks || [];

 
  const tableRows = tasks.map((tasks, index) => (
    <TableRow key={tasks.id}>
      <TableCell>{tasks.id}</TableCell>
      <TableCell>
      {tasks.tags && tasks.tags.length >  0 ? tasks.tags.map((tag, index) => (
        <Chip key={index} label={tag}
        sx={{
          borderRadius: '3px',
          marginLeft:'6px'
        }}
        />
      )) : '-' }
      </TableCell>
      <TableCell>{tasks.priority}</TableCell>
      <TableCell>{new Date(tasks.startDate).toLocaleDateString()}</TableCell>
      <TableCell>{new Date(tasks.endDate).toLocaleDateString()}</TableCell>
      <TableCell>{tasks.status}</TableCell>
      <TableCell>
        <Link href="/taskdetails/[id]" as={`taskdetails/${tasks.id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0  0  24  24">
            <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
            </svg>
        </Link>
      </TableCell>
    </TableRow>
  ));
  content = (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{tableRows}</TableBody>
      </Table>
    </TableContainer>
  );
}


  return (
<Container maxWidth="xl-lg" sx={{ mt:  8 }}>
      <Box sx={{ margin: '0vw  5vw' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Tasks</h1>
          <SpringModal />
        </div>

        <Paper style={{ height:  500, width: '100%', background: 'transparent', boxShadow: 'none', border: 'none' }}>
          {content}
        </Paper>
      </Box>
    </Container>
  );
}
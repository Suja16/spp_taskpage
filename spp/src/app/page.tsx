'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Chip, Container, Hidden } from '@mui/material';
import SpringModal from '@/components/popup';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import client from 'lib/apollo-client';
import { gql } from '@apollo/client';
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardDoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';


const GET_DATA=gql`
query MyQuery {
  tasks{
    id
    title
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  let content;
  if (loading) {
    content = <LinearProgress/>
  } else if (error) {
    console.error("Error fetching tasks:", error);
    content = 
    <Alert severity="error"> error 404 :( data  not available</Alert>
  } else {
    const tasks = data?.tasks || [];

    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value,  10));
      setPage(0);
    };

 
    const tableRows = tasks
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((tasks, index) => (
    <TableRow key={tasks.id}>
      <TableCell>{tasks.title}</TableCell>
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
      <TableCell>
      <Box sx={{alignItems:'center',display:'flex'}}>
      {tasks.priority}
      {tasks.priority === 'HIGH' ? <KeyboardDoubleArrowUp color='primary' /> : tasks.priority === 'MEDIUM' ? <ExpandLessIcon color="primary" /> : <RemoveIcon color="primary" />}
      </Box>
      </TableCell>
      <TableCell>{new Date(tasks.startDate).toLocaleDateString()}</TableCell>
      <TableCell>{new Date(tasks.endDate).toLocaleDateString()}</TableCell>
      <TableCell>
      <Chip
                label={tasks.status}
                variant="outlined"
                color={tasks.status === 'COMPLETED' ? 'success': tasks.status === 'PENDING' ? 'warning' : 'primary'}
                sx={{
                  borderRadius: '3px',
                  minHeight: '38px',
                }}
              />
      </TableCell>
      <TableCell>
      <Link
            href={{
              pathname: "/taskdetails/" + tasks.id,
            }}
          >
            <RemoveRedEyeTwoToneIcon color="primary" />
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
        <TableFooter >
          <TableRow>
        <TablePagination
          count={tasks.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </TableRow>
        </TableFooter>

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
import React from 'react';
import { Container, Divider, Chip, Link, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const TaskDetails = () => {
  return (
    <Container
      sx={{
        m:8 ,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    
    >
      <div style={{display:'flex',marginBottom:'0.5rem',alignItems:'center'}}>
        <ArrowBackIcon sx={{color:'#48B1ED'}} />
        <Link href="/" variant='h6' sx={{color:'#48B1ED', fontWeight:'700'}}>Back to all Tasks</Link>
      </div>
      <div style={{marginBottom:'3rem'}}>
        <Typography variant="h4" fontWeight={700}>Task Details</Typography>
      </div>
      <div style={{display:'flex',justifyContent: 'start', alignItems:'center', flexWrap:'wrap'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'2rem',width:'50%'}}>
        <div style={{marginBottom:'2rem'}}>
          <Typography variant="h6">Task Information</Typography>
        </div>
        <div style={{display:'flex',justifyContent: 'space-between', alignItems:'center', flexWrap:'wrap',width:'100%'}}>
          <div style={{width:'50%'}}>
            <Typography variant="h6">Title</Typography>
            <Typography>Karan</Typography>
          </div>
          <div style={{width:'50%'}}>
            <Typography variant="h6">Description</Typography>
            <Typography>Rudra</Typography>
          </div>
        </div>
        <div>
          <div>
            <Typography variant="h6">Assigned to</Typography>
            <Typography>Karan</Typography>
          </div>
        </div>
      </div>
      <Divider orientation="vertical" flexItem />
      <div style={{ margin:'2rem',display:'flex',justifyContent:'space-between'}}>
        <div>
          <Typography variant="h6">Status</Typography>
          <Chip
            label="Assigned"
            variant="filled"
          />
        </div>
      </div>
      </div>
    </Container>
  );
};

export default TaskDetails;

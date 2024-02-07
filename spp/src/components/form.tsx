import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { z } from 'zod';
import { useState } from 'react';
import { Divider } from '@mui/material';
import CustomChip from './Chip';

const style = {
    width:'31vw',
    marginTop:'1rem',
};
const btnst ={
  backgroundColor:'#48B1ED',
  color:'white',
  padding:'0.8rem 2.5rem',
  borderRadius:'0.5vw ',
  border:'none',
  cursor:'pointer',
  fontWeight:'700',

};

export default function Form() {
  const formSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  });


  return (
    <Box
      component="form"
      sx={{
      }}
      noValidate
      autoComplete="off"
    >
     <form style={{display:'flex',flexWrap:'wrap',gap:'1rem', justifyContent:'space-between',padding:'3rem',alignItems:'baseline'}}>
     <TextField id="outlined-basic" label="Title *" variant="outlined" style={style} />
     <TextField id="outlined-basic" label="Assign To *" variant="outlined" style={style}/>
     <TextField id="outlined-basic" label="Description" variant="outlined" style={style} />
     <div style={{...style,display:'flex',justifyContent:'space-between'}}>
          <TextField
                id="date"
                label="Start Date"
                type="date"
                defaultValue="2022-01-01" // replace with your desired date
                style={{width:'11.9rem'}}
                InputLabelProps={{
                  shrink: true,
                }}
            />
        <TextField
            id="date"
            label="Start Date"
            type="date"
            defaultValue="2022-01-01" // replace with your desired date
            style={{width:'11.9rem'}}
            InputLabelProps={{
              shrink: true,
            }}
        />
        </div>
        <div style={style}>
        <h6 style={{marginLeft:'0.3rem',marginBottom:'0.6rem'}}>Priority</h6>
        <CustomChip labels={['Low', 'Medium', 'High']} />
        </div>
        <div style={style}>
          <h6 style={{marginLeft:'0.3rem', marginBottom:'0.6rem'}}>Assign Work</h6>
        <CustomChip labels={['Other', 'Deposits', 'Withdrawals']} />
        </div>
      <button
       type='submit'
       style={{ ...btnst, marginLeft:'70%',marginTop:'3rem'}}
       >
        CONFIRM AND ADD TASK
        </button>
      </form>
    </Box>
  );
}

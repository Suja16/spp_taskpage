import React from 'react';
import { Container } from '@mui/material';
import Divider from '@mui/material';

export default function TaskDetails() {
  return (
    <div>
    <div>
      <link href="/">Back to all Task</link>
    </div>
    <div>
        <h1>Task Details</h1>
    </div>
    <div>
        <div>
            <h5>Task Information</h5>
        </div>
        <div>
            <div>
            <h6>Title</h6>
            <p>Karan</p>
            </div>
            <div>
                Description
            </div>
        </div>
        <div>
            <div>
            <h6>Assigned to</h6>
            <p>John</p>
            </div>
        </div>
    </div>
    <Divider/>
    <div>
        <div>
        <h6>Status</h6>
        <Chip
          color='secondry'
          label='New'
          sx={{
            margin: '4px',
            "--Chip-radius": "3px",
            "--Chip-minHeight": "38px",
          }}
        />
        </div>

    </div>

    </div>
  );
}
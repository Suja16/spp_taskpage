// pages/taskdetails/[taskid].tsx
import React from "react";
import { Container, Divider, Chip, Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Grid } from "@mui/material";
import client from 'lib/apollo-client';
import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { useQuery } from "@apollo/client";
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import KeyboardDoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';


const GET_DATA = gql`
  query MyQuery($taskid: uuid!) {
    tasks(where: {id: {_eq: $taskid}}) {
      id
      title
      description
      assignedToId
      status
      priority
      startDate
      endDate
      tags
    }
  }
`;

interface TaskDetailsProps {
  taskid: string;
}

export default function TaskDetailsPage({ taskid }: TaskDetailsProps) {
  const { loading, error, data } = useQuery(GET_DATA, { variables: { taskid }, client });

  let content;
  if (loading) {
    content = <LinearProgress />;
  } else if (error) {
    console.error("Error fetching tasks:", error);
    content =
      <Alert severity="error">
        Error fetching tasks
      </Alert>;
  } else {
    const task = data?.tasks[0] || {};
    
    const taskData = {
      title: task.title,
      assignedTo: task.assignedToId, 
      description: task.description,
      status: task.status,
      priority: task.priority,
      startDate: task.startDate,
      endDate: task.endDate,
    };

  return (
      <Container
        maxWidth="xl-lg"
        sx={{
          m: 8,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "0.5rem",
            alignItems: "center",
            gap: '0.5rem',
          }}
        >
          <Link
            href="/"
            variant="h6"
            sx={{
              color: "#48B1ED",
              fontWeight: "700",
              display: 'flex',
              alignItems: 'center',
              textDecoration:'none'
            }}
          >
            <ArrowBackIcon sx={{ color: "#48B1ED", marginRight: '0.5rem', }} />
            Back to all Tasks
          </Link>
        </div>
        <div style={{ margin: "0 0 3rem 0" }}>
          <Typography variant="h4" fontWeight={700}>
            Task Details
          </Typography>
        </div>
        <div style={{ marginBottom: "-2rem" }}>
          <Typography variant="h6">Task Information</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "baseline",
            flexWrap: "wrap",
          }}
        >
          <Grid container spacing={4} style={{ width: "50%" }}>
            <Grid item xs={6}>
              <Typography variant="h6">Title</Typography>
              <Typography>{taskData.title}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Description</Typography>
              <Typography>{taskData.description}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Assigned to</Typography>
              <Typography>{taskData.assignedTo}</Typography>
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid container spacing={4} style={{ margin: "2rem", width: "40%" }}>
            <Grid item xs={6}>
              <Typography variant="h6">Status</Typography>
              <Chip
                label={taskData.status}
                variant="outlined"
                color={taskData.status === 'COMPLETED' ? 'success': taskData.status === 'PENDING' ? 'warning' : 'primary'}
                sx={{
                  borderRadius: '3px',
                  minHeight: '38px',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Priority</Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography>
                  {taskData.priority}
                </Typography>
                {taskData.priority === 'HIGH' ? <KeyboardDoubleArrowUp color='primary' /> : taskData.priority === 'MEDIUM' ? <ExpandLessIcon color="primary" /> : <RemoveIcon color="primary" />}
              </div>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Start Date</Typography>
              <Typography>{new Date(taskData.startDate).toLocaleDateString()}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">End Date</Typography>
              <Typography>{new Date(taskData.endDate).toLocaleDateString()}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Tags</Typography>
              {task.tags && task.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{
                borderRadius: '3px',
                minHeight: '38px',
                margin: '3px',
              }}
            />
          ))}
            </Grid>
          </Grid>
        </div>
      </Container>
  );
}};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { taskid } = context.query; 
  return {
    props: {
      taskid,
    },
  };
};

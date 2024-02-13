"useclient"
import React from "react";
import { Container, Divider, Chip, Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Grid } from "@mui/material";
import { gql } from "@apollo/client";
import client from "lib/apollo-client";
import { useQuery } from "@apollo/client";



const TASK_Data=gql`
query MyQuery {
  tasks{
    id
    tags
    priority
    startDate
    endDate
    status
    description
    assignedToId
  }
}
`

const TaskDetails = () => {

  const { loading, error, data } = useQuery(TASK_Data);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching tasks:", error);
    return <p>Error!</p>;
  }

  const tasks = data?.tasks[0];

  const labels = ['Tag1', 'Tag2', 'Tag3'];

  const taskData = {
    title: {tasks}.id,
    assignedTo: {tasks}.assignedToId,
    description: {tasks}.description,
    status: {tasks}.status,
    priority: {tasks}.priority,
    startDate: {tasks}.startDate,
    endDate: {tasks}.endDate,
  };

  return (
    <>
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
                sx={{
                  borderRadius: '3px',
                  minHeight: '38px',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Priority</Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography>{taskData.priority}</Typography>
                <KeyboardDoubleArrowUpIcon sx={{ color: "#3199D4" }} />
              </div>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Start Date</Typography>
              <Typography>{taskData.startDate}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">End Date</Typography>
              <Typography>{taskData.endDate}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Tags</Typography>
              {labels.map((label, index) => (
                <Chip
                  key={index}
                  label={label}
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
    </>
  );
};

export default TaskDetails;

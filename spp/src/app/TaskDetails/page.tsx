import React from "react";
import { Container, Divider, Chip, Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Grid } from "@mui/material";

const TaskDetails = () => {
  const labels = ['Tag1', 'Tag2', 'Tag3'];

  // Replace these with dynamic data based on your application
  const taskData = {
    title: "Sample Task",
    assignedTo: "John Doe",
    description: "Task description goes here",
    status: "new",
    priority: "High",
    startDate: "2024-02-08",
    endDate: "2024-02-15",
  };

  return (
    <>
      <Container
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
            }}
          >
            <ArrowBackIcon sx={{ color: "#48B1ED", marginRight: '0.5rem' }} />
            Back to all Tasks
          </Link>
        </div>
        <div style={{ marginBottom: "3rem" }}>
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
              <Typography variant="h6">Assigned to</Typography>
              <Typography>{taskData.assignedTo}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Description</Typography>
              <Typography>{taskData.description}</Typography>
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

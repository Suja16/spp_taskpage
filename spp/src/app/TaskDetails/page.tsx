import React from "react";
import { Container, Divider, Chip, Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Grid } from "@mui/material";

const TaskDetails = () => {
  const labels = ['Tag1', 'Tag2', 'Tag3'];
  return (
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
          gap:'0.5rem'
        }}
      >
        <ArrowBackIcon sx={{ color: "#48B1ED" }} />
        <Link
          href="/"
          variant="h6"
          sx={{ color: "#48B1ED", fontWeight: "700" }}
        >
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
            <Typography>Karan</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Assigned to</Typography>
            <Typography>Karan</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h6">Description</Typography>
            <Typography>Rudra</Typography>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid container spacing={4} style={{ margin: "2rem", width: "40%" }}>
          <Grid item xs={6}>
            <Typography variant="h6">Status</Typography>
            <Chip
            label="new"
            sx={{
              borderRadius: '3px',
              minHeight: '38px',
            }}
          />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Priority</Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography>High</Typography>
              <KeyboardDoubleArrowUpIcon sx={{ color: "#3199D4" }} />
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Start Date</Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography>Karan</Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">End Date</Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography>Rudra</Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Start Date</Typography>
            {labels.map((label, index) => (
        <Chip
          key={index}
          label={label}
          sx={{
            borderRadius: '3px',
            minHeight: '38px',
            margin:'3px'
          }}
          // Add other Chip props as needed
        />
      ))}

          </Grid>
        </Grid>
        ;
      </div>
    </Container>
  );
};

export default TaskDetails;

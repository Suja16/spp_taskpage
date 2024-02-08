import React from "react";
import { Container, Divider, Chip, Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Grid } from "@mui/material";

const TaskDetails = () => {
  const labels = ['Tag1', 'Tag2', 'Tag3'];
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
            {/* ... Grid items with dynamic data */}
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid container spacing={4} style={{ margin: "2rem", width: "40%" }}>
            {/* ... Grid items with dynamic data */}
            <Grid item xs={6}>
              <Typography variant="h6">Start Date</Typography>
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

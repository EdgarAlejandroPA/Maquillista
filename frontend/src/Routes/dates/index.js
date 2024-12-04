import React from "react";
import { MakeupDateProvider } from "./store";
import { Content } from "./content";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

export const ViewDate = () => {
  return (
    <MakeupDateProvider>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Cita Agendada</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "16px" }}>
        <Content />
      </Container>
    </MakeupDateProvider>
  );
};

import React from "react";
import { DatesProvider } from "./store";
import { Content } from "./content";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

export const CreateDate = () => {
  return (
    <DatesProvider>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Agendar Cita</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "16px" }}>
        <Content />
      </Container>
    </DatesProvider>
  );
};

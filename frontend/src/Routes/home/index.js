import React from "react";
import { MakeupProvider } from "./store";
import { Content } from "./content";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

export const Home = () => {
  return (
    <MakeupProvider>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Maquillista y Productos</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "16px" }}>
        <Content />
      </Container>
    </MakeupProvider>
  );
};

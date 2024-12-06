import React from "react";
import { useMakeupContext } from "./store";
import {
  CircularProgress,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

export const Content = () => {
  const { makeupArtist, products, loading, error } = useMakeupContext();

  if (loading)
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </div>
    );
  if (error)
    return <Typography color="error">Error: {error}</Typography>;

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#FFFAF1",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          backgroundColor: "#F06292",
          padding: "16px",
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        <Typography
          variant="h3"
          style={{
            color: "#000",
            padding: "8px",
            backgroundColor: "#F06292",
            display: "inline-block",
            borderRadius: "8px",
          }}
        >
          RangelBeautyStudio
        </Typography>
      </header>

      <Typography variant="h4" gutterBottom>
        Información de Maquillista
      </Typography>

      {makeupArtist ? (
        <Card
          onClick={() =>
            (window.location.pathname = `/dates/create/${makeupArtist.id}`)
          }
          style={{
            marginBottom: "16px",
            cursor: "pointer",
            backgroundColor: "#E1BEE7",
            color: "#000",
          }}
        >
          <CardContent>
            <Typography variant="h6">{makeupArtist.name}</Typography>
            <Typography variant="body1">{makeupArtist.second_name}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body1">
          No se encontró información del maquillista.
        </Typography>
      )}

      <Typography variant="h4" gutterBottom>
        Productos
      </Typography>
      <Grid container spacing={2}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                style={{
                  backgroundColor: "#E1BEE7",
                  color: "#000",
                }}
              >
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2">{product.description}</Typography>
                  <img
                    src={"/" + product.icon}
                    alt={product.name}
                    style={{ maxWidth: "100%", marginTop: "8px" }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No hay productos disponibles.</Typography>
        )}
      </Grid>
    </div>
  );
};

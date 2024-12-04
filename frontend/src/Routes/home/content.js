import React from "react";
import { useMakeupContext } from "./store";
import { CircularProgress, Typography, Card, CardContent, Grid } from "@mui/material";

export const Content = () => {
  const { makeupArtist, products, loading, error } = useMakeupContext();

  if (loading) return <div style={{display: "flex", justifyContent: "center"}}><CircularProgress /></div>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <div style={{ padding: "16px" }}>
      <Typography variant="h4" gutterBottom>
        Información del Maquillista
      </Typography>
      {makeupArtist ? ( 
        <Card onClick={()=>window.location.pathname = `/dates/create/${makeupArtist.id}`} style={{ marginBottom: "16px", cursor:"pointer" }}>
          <CardContent>
            <Typography variant="h6">{makeupArtist.name}</Typography>
            <Typography variant="body1">{makeupArtist.second_name}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body1">No se encontró información del maquillista.</Typography>
      )}

      <Typography variant="h4" gutterBottom>
        Productos
      </Typography>
      <Grid container spacing={2}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2">{product.description}</Typography>
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

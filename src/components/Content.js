import React from "react";
import { Button, Card, CardContent, CardHeader, Container, Grid2, useTheme } from "@mui/material";

const Content = () => {
  const neuron = useTheme();
  
  return (
    <Container sx={{ paddingTop: "7rem" }}>
      <Grid2 container spacing={3}>
        <Grid2 size={6}>
          <Card sx={{ height: "100%" }}>
            <CardHeader title="Card Title" />
            <CardContent>Lorem Ipsum dolor sit amet consectetur.</CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <h1>Bienvenido Neuron IT Solutions Ltda.</h1>
          <p>
            Este es un ejemplo simple usando React sin frameworks adicionales.
          </p>
          <Button variant="contained" color="primary">
            Click Here
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Content;

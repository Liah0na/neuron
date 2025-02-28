import React from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";

const App = () => {
  return (
    <div>
      <AppBar
        color="transparent"
        component="header"
        position="fixed"
        sx={{
          backdropFilter: "blur(8px)",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Container>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <Box
              component="img"
              src="/images/logo.svg"
              alt="Neuron IT Solutions"
              sx={{ height: 40, width: "auto" }}
            />
            <Typography
              color="primary"
              variant="h6"
              sx={{ fontWeight: "bold" }}
            >
              Neuron IT
            </Typography>
          </Stack>
        </Container>
      </AppBar>
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
      <Box
        component="footer"
        sx={{ width: "100%", position: "fixed", bottom: 50 }}
      >
        <Container>
          FOOTER
        </Container>
      </Box>
    </div>
  );
};

export default App;

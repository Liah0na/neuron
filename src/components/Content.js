import React from "react";
import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid2, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";

const Content = () => {
  const neuron = useTheme();
  
  return (
    <Container sx={{ paddingTop: "7rem" }}>
      <Typography variant="h1" sx={{ color: neuron.palette.neutral.n900, fontSize: "2.5rem", mb: 3 }}>
        Infraestructura digital en la nube: hosting, seguridad, desarrollo y optimización web.
      </Typography>
      <Grid2 container spacing={3}>
        <Grid2 size={6}>
          <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <CardHeader title="Transforma tu negocio con soluciones digitales seguras y escalables" />
            <CardContent sx={{ flexGrow: 1 }}>
              <List>
                <ListItem>
                  <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Proin mattis dolor auctor, suscipit velit in, pellentesque lorem." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Vivamus lobortis tortor eu sem dictum, in semper nulla sollicitudin." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phasellus eget nunc non tortor ultrices tincidunt." />
                </ListItem>
              </List>
            </CardContent>
            <CardActions sx={{ backgroundColor: neuron.palette.blue.b200 }}>
              <Button size="small" sx={{ typography: "buttonHome" }}>Ver más</Button>
              <Button size="small" sx={{ typography: "buttonHome" }}>Iniciar análisis</Button>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2 size={6}>
        <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <CardHeader title="Da el primer paso hacia el éxito digital." />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemText primary="Curabitur vitae mauris bibendum, consectetur lectus id, imperdiet nulla." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Vivamus consectetur turpis a urna pharetra, eget egestas quam vestibulum." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phasellus eu nulla sit amet felis bibendum rutrum vel et libero.." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Maecenas at lectus ut mauris sagittis facilisis id ut ipsum." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Praesent sed quam sed leo dictum fermentum non nec mi." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Proin mattis dolor auctor, suscipit velit in, pellentesque lorem." />
                </ListItem>
              </List>
            </CardContent>
            <CardActions sx={{ backgroundColor: neuron.palette.blue.b200, justifyContent: "flex-end" }}>
              <Button size="small" sx={{ typography: "buttonHome" }}>Ver más</Button>
              <Button size="small" sx={{ typography: "buttonHome" }}>Enviar requerimientos</Button>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Content;

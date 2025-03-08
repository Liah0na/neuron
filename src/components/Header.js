import React from "react";
import {
  AppBar,
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const Header = () => {
  const neuron = useTheme();

  return (
    <AppBar
      color="transparent"
      component="header"
      elevation={2}
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
            sx={{ color: neuron.palette.blue.b700 }}
          >
            Neuron IT
          </Typography>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const neuron = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: neuron.palette.blue.b700,
        bottom: 0,
        color: "white",
        position: "fixed",
        px: 4,
        py: 6,
        textAlign: "center",
        width: "100%",
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: neuron.palette.neutral.n300, fontSize: "1.05rem" }}
      >
        &copy; {new Date().getFullYear()} Neuron IT Solutions Ltda. | CNPJ:
        58.812.767/0001-03 | CEP: 24230-540 | Niterói - RJ
      </Typography>
    </Box>
  );
};

export default Footer;

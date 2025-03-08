import React from "react";
import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import neuron from "./theme/neuron";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={neuron}>
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

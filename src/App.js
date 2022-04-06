import Main from "./components/Main";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
require("typeface-oxanium");

const theme = createTheme({
  typography: {
    fontFamily: ["Oxanium", "cursive"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#31A37E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3f50b5",
      contrastText: "#fff",
    },
    utility: {
      main: "#f44336",
      contrastText: "#fff",
    },
    black: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

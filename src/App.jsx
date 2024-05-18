import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home/home";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#c31e39',
    },
    secondary: {
      main: '#000000',
    },
    terciary: {
      main: '#ffffff',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
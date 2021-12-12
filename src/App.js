import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Typography } from "@mui/material";
import Customerlist from "./components/Customerlist";
import Traininglist from "./components/Traininglist";

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              <Link to="/">Customerlist</Link>{" "}
              <Link to="/Traininglist">Traininglist</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Customerlist />} />
          <Route path="/Traininglist" element={<Traininglist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

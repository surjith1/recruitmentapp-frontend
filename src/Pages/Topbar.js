import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="page-1">
      <AppBar className="top-bar" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Recruitment Application
          </Typography>

          <Button color="inherit" onClick={() => navigate("/signup")}>
            Signup
          </Button>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className="page1-content">
        <h1>
          Welcome to the <br />
          Job Recruitment Web Application <br /> 💐💐💐
        </h1>
      </div>
    </div>
  );
};

export default Topbar;

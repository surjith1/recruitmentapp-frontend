import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const FixedTopSection = ({ props }) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <AppBar className="fixed-top-bar" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props}
          </Typography>

          <Button color="inherit">Applications</Button>

          <Button
            color="inherit"
            onClick={() => navigate("/applicant-profile")}
          >
            Profile
          </Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default FixedTopSection;

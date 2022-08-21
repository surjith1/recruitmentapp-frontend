import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectDropdown = ({ props }) => {
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={type}
        label={props}
        onChange={handleChange}
      >
        <MenuItem value="Fresher">Fresher</MenuItem>
        <MenuItem value="Experience">Experience</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectDropdown;

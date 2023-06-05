import React from "react";
import {
  FormControlLabel,
  Checkbox,
  FormGroup,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  ListItemText,
} from "@mui/material";

const Checkmarks = ({ options, onChange, filterValue }: any) => {
  // const handleCheckboxChange = (event) => {
  //   const { value } = event.target;
  //   const newFilter = { ...filter };

  //   newFilter[value] = !newFilter[value];
  //   onFilterChange(newFilter);
  // };

  return (
    <div>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={filterValue}
          onChange={onChange}
          renderValue={(selected) => selected.join(", ")}
          label="Tag"
          sx={{ textTransform: "capitalize" }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={index}
              value={option}
              sx={{ textTransform: "capitalize" }}
            >
              <Checkbox checked={filterValue.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Checkmarks;

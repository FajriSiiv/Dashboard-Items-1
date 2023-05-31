import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

interface FilterProps {
  options: any;
  value: string;
  onChange: (event: React.ChangeEvent<any>) => void;
}

const FilterSelect = ({ options, value, onChange }: FilterProps) => {
  return (
    <FormControl sx={{ minWidth: "200px" }}>
      <InputLabel>Status Barang</InputLabel>
      <Select value={value} onChange={onChange} label="Status Barang">
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;

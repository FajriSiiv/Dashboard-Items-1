import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

interface FilterProps {
  options: any;
  value: string;
  onChanges: (event: React.ChangeEvent<any>) => void;
}

const FilterSelect = ({ options, value, onChanges }: FilterProps) => {
  return (
    <FormControl sx={{ minWidth: "200px" }}>
      <InputLabel>Status Barang</InputLabel>
      <Select value={value} onChange={() => onChanges} label="Status Barang">
        {options.map((option: any, index: any) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;

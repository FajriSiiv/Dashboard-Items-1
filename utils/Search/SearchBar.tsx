import React, { useState } from "react";
import { TextField } from "@mui/material";

const SearchBarComponent = ({ valueSearch, onChange }: any) => {
  return (
    <TextField
      sx={{ width: "100%" }}
      label="Cari Barang"
      value={valueSearch}
      onChange={onChange}
      variant="outlined"
    />
  );
};

export default SearchBarComponent;

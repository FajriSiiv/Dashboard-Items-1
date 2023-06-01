import React from "react";

import { Button } from "@mui/material";

export default function ResetButton(props: any) {
  return (
    <Button
      sx={{ height: "56px", width: "100px" }}
      variant="contained"
      onClick={props.onClick}
    >
      Reset
    </Button>
  );
}

import React from "react";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { CalendarPicker } from "../calendar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Mail, FileDownload, PictureAsPdf, Share } from "@mui/icons-material";
import DataTable from "../table/dataGrid";

export default function Dashboard() {
  const Header = () => {
    return (
      <>
        <Box>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Dashboard</Typography>
          </Breadcrumbs>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ marginTop: "20px" }}
        >
          <Stack spacing={0}>
            <Typography variant="h6" component="h1">
              Welcome back,Fajri!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You have 12 message and 7 notifications
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <CalendarPicker />
            <Stack
              direction="row"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
                marginLeft: "10px",
              }}
            >
              <ButtonGroup
                variant="contained"
                aria-label="medium secondary button group"
              >
                <Button>
                  <Mail />
                </Button>
                <Button>
                  <FileDownload />
                </Button>
                <Button>
                  <PictureAsPdf />
                </Button>
                <Button>
                  <Share />
                </Button>
              </ButtonGroup>
            </Stack>
          </Stack>
        </Stack>
      </>
    );
  };

  return (
    <Box
      style={{
        padding: "20px",
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <Header />
      <br />
      <br />
      <DataTable />
    </Box>
  );
}

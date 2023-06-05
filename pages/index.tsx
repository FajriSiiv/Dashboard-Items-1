import { Visibility } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const CardDashboard = (props: any) => {
    return (
      <Box
        sx={{
          height: "190px",
          width: "25%",
          backgroundColor: props.bgColor ? props.bgColor : "white",
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          justifyContent: "center",
          alignItems: "center",
          border: `2px solid ${props.colorText ? props.colorText : "white"}`,
        }}
      >
        {props.icons}

        <Stack
          direction="column"
          alignItems="center"
          sx={{
            color: props.colorText ? props.colorText : "black",
          }}
        >
          <Typography variant="h5" component="p" fontWeight="bold">
            11,25,140
          </Typography>
          <Typography variant="body1" component="span" fontWeight="500">
            Inslight Total
          </Typography>
        </Stack>
      </Box>
    );
  };

  return (
    <Box
      style={{
        padding: "20px",
        background: "#f8f9fa",
        minHeight: "90vh",
      }}
    >
      <Box pt={5}>
        <Typography component="h1" variant="h5">
          Welcome Back,Fajri!
        </Typography>
      </Box>
      <Box sx={{ paddingTop: "50px" }}>
        <Stack direction="row" flexWrap="nowrap" gap={2}>
          <CardDashboard
            icons={
              <Visibility
                sx={{
                  padding: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#eeeeee",
                  fontSize: "40px",
                  color: "#4ad66d",
                }}
              />
            }
            colorText="#4ad66d"
          />
          <CardDashboard
            icons={
              <Visibility
                sx={{
                  padding: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#eeeeee",
                  fontSize: "40px",
                  color: "#4ad66d",
                }}
              />
            }
            colorText="#4ad66d"
          />
          <CardDashboard
            icons={
              <Visibility
                sx={{
                  padding: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#eeeeee",
                  fontSize: "40px",
                  color: "#4ad66d",
                }}
              />
            }
            colorText="#4ad66d"
          />
          <CardDashboard
            icons={
              <Visibility
                sx={{
                  padding: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#eeeeee",
                  fontSize: "40px",
                  color: "#4ad66d",
                }}
              />
            }
            colorText="#4ad66d"
          />
        </Stack>
      </Box>
    </Box>
  );
}

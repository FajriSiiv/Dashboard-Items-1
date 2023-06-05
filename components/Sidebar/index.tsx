import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  AcUnit,
  Camera,
  Category,
  CategoryOutlined,
  Home,
  HomeOutlined,
  HomeRounded,
  ShoppingCart,
} from "@mui/icons-material";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  const ButtonLink = (props: any) => {
    return (
      <Button
        sx={{
          color: router.pathname === `/` + props.path ? "#0c0c0c" : "#b6b6b68e",
          fontFamily: "Poppins",
          textTransform: "capitalize",
          fontSize: "16px",
          borderRadius: "10px",
          justifyContent: "start",
          gap: "10px",
          fontWeight: "600",
        }}
        size="large"
        startIcon={props.icon}
        onClick={() => router.push("/" + props.path)}
      >
        {props.path === "" ? "home" : props.path}
      </Button>
    );
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        justifyContent="center"
        py={5}
      >
        <Camera fontSize="large" />
        <Typography
          variant="h4"
          component="h1"
          fontWeight={800}
          sx={{
            fontFamily: "Righteous !important",
          }}
        >
          logip
        </Typography>
      </Stack>
      <Stack direction="column" gap={1} mt={4} paddingX={1}>
        <ButtonLink path="" icon={<HomeOutlined />} />
        <ButtonLink path="barang" icon={<CategoryOutlined />} />
        <ButtonLink path="marketplace" icon={<ShoppingCart />} />
      </Stack>
    </>
  );
}

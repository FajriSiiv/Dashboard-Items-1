import {
  AccountCircleOutlined,
  CalendarMonthOutlined,
  AttachMoney,
  Autorenew,
  Category,
  ShoppingCart,
  AddShoppingCart,
} from "@mui/icons-material";
import { Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const DetailDrawerContact = (props?: any) => {
  const [data, setData] = useState<any>(props.data);

  const filterData = data.filter((e: any) => e.id === props.idDrawer)[0];

  const RenderData = (props: any) => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        sx={{ minWidth: "50%" }}
      >
        {props.icons}
        <Stack direction="column">
          <Typography variant="caption" color="#6c757d">
            {props.text}
          </Typography>
          <Typography variant="body1" color="#212529">
            {props.value}
          </Typography>
        </Stack>
      </Stack>
    );
  };

  return (
    <Box p={3} width="50vw" maxWidth={500}>
      {filterData && (
        <Stack direction="column" gap={4} mr={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            gap={3}
            alignItems="center"
          >
            <Typography variant="h2" fontSize={30} fontWeight="bold">
              Detail Barang
            </Typography>
          </Stack>

          <RenderData
            text="Nama Barang"
            value={filterData.nama_barang}
            icons={<ShoppingCart fontSize="large" />}
          />
          <RenderData
            text="Tipe Barang"
            value={filterData.tipe_barang}
            icons={<Category fontSize="large" />}
          />
          <RenderData
            text="Status Barang"
            value={filterData.status}
            icons={<Autorenew fontSize="large" />}
          />
          <RenderData
            text="Pembeli"
            value={filterData.pembeli}
            icons={<AccountCircleOutlined fontSize="large" />}
          />
          <RenderData
            text="Tanggal Pemesanan"
            value={filterData.tanggal_pemesanan}
            icons={<CalendarMonthOutlined fontSize="large" />}
          />

          <RenderData
            text="Estimasi Penerimaan"
            value={filterData.estimasi_penerimaan}
            icons={<CalendarMonthOutlined fontSize="large" />}
          />

          <RenderData
            text="Harga Barang"
            value={filterData.harga_barang}
            icons={<AttachMoney fontSize="large" />}
          />
          <RenderData
            text="Jumlah Barang"
            value={filterData.jumlah_barang}
            icons={<AddShoppingCart fontSize="large" />}
          />
        </Stack>
      )}
    </Box>
  );
};

export default DetailDrawerContact;

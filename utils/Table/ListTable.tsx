import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useState, useEffect } from "react";
import FilterSelect from "@/utils/Filter/FilterSelect";
import Checkmarks from "@/utils/Filter/FilterCheckmark";
import { Stack, Drawer } from "@mui/material";
import SearchBarComponent from "@/utils/Search/SearchBar";
import DetailDrawerContact from "@/components/Drawer/Items/DrawerItems";
import ResetButton from "@/utils/Button/ResetButton";

interface Data {
  jumlah_barang: number;
  nama_barang: string;
  harga_barang: number;
  tipe_barang: string;
  status: string;
  pembeli: string;
  tanggal_pemesanan: string;
  estimasi_penerimaan: string;
}

const rows = [
  {
    nama_barang: "Kemeja",
    tipe_barang: "Pakaian",
    status: "Dalam Proses",
    pembeli: "John Doe",
    tanggal_pemesanan: "2023-05-28",
    estimasi_penerimaan: "2023-06-05",
    harga_barang: 150000,
    jumlah_barang: 2,
    id: 1,
  },
  {
    nama_barang: "Sepatu",
    tipe_barang: "Pakaian",
    status: "Selesai",
    pembeli: "Jane Smith",
    tanggal_pemesanan: "2023-05-25",
    estimasi_penerimaan: "2023-06-02",
    harga_barang: 300000,
    jumlah_barang: 1,
    id: 2,
  },
  {
    nama_barang: "Tas",
    tipe_barang: "Aksesori",
    status: "Dibatalkan",
    pembeli: "David Johnson",
    tanggal_pemesanan: "2023-05-20",
    estimasi_penerimaan: "2023-05-28",
    harga_barang: 250000,
    jumlah_barang: 3,
    id: 3,
  },
  {
    nama_barang: "Celana",
    tipe_barang: "Pakaian",
    status: "Dalam Proses",
    pembeli: "Lisa Anderson",
    tanggal_pemesanan: "2023-05-19",
    estimasi_penerimaan: "2023-05-28",
    harga_barang: 120000,
    jumlah_barang: 2,
    id: 4,
  },
  {
    nama_barang: "Kacamata",
    tipe_barang: "Aksesori",
    status: "Selesai",
    pembeli: "Michael Brown",
    tanggal_pemesanan: "2023-05-15",
    estimasi_penerimaan: "2023-05-22",
    harga_barang: 80000,
    jumlah_barang: 1,
    id: 5,
  },
  {
    nama_barang: "Buku",
    tipe_barang: "Buku",
    status: "Dalam Proses",
    pembeli: "Sophia Davis",
    tanggal_pemesanan: "2023-05-12",
    estimasi_penerimaan: "2023-05-18",
    harga_barang: 50000,
    jumlah_barang: 3,
    id: 6,
  },
  {
    nama_barang: "Sandal",
    tipe_barang: "Pakaian",
    status: "Selesai",
    pembeli: "Daniel Wilson",
    tanggal_pemesanan: "2023-05-10",
    estimasi_penerimaan: "2023-05-16",
    harga_barang: 100000,
    jumlah_barang: 1,
    id: 7,
  },
  {
    nama_barang: "Jam Tangan",
    tipe_barang: "Aksesori",
    status: "Dalam Proses",
    pembeli: "Olivia Miller",
    tanggal_pemesanan: "2023-05-08",
    estimasi_penerimaan: "2023-05-15",
    harga_barang: 200000,
    jumlah_barang: 2,
    id: 8,
  },
  {
    nama_barang: "Kamera",
    tipe_barang: "Elektronik",
    status: "Selesai",
    pembeli: "William Taylor",
    tanggal_pemesanan: "2023-05-05",
    estimasi_penerimaan: "2023-05-12",
    harga_barang: 500000,
    jumlah_barang: 1,
    id: 9,
  },
  {
    nama_barang: "Jaket",
    tipe_barang: "Pakaian",
    status: "Dalam Proses",
    pembeli: "Emily Martinez",
    tanggal_pemesanan: "2023-05-02",
    estimasi_penerimaan: "2023-05-09",
    harga_barang: 180000,
    jumlah_barang: 2,
    id: 10,
  },
  {
    nama_barang: "Dompet",
    tipe_barang: "Aksesori",
    status: "Selesai",
    pembeli: "Benjamin Adams",
    tanggal_pemesanan: "2023-04-30",
    estimasi_penerimaan: "2023-05-07",
    harga_barang: 75000,
    jumlah_barang: 1,
    id: 11,
  },
  {
    nama_barang: "Parfum",
    tipe_barang: "Kecantikan",
    status: "Dalam Proses",
    pembeli: "Sofia Thomas",
    tanggal_pemesanan: "2023-04-28",
    estimasi_penerimaan: "2023-05-05",
    harga_barang: 150000,
    jumlah_barang: 3,
    id: 12,
  },
  {
    nama_barang: "Sepeda",
    tipe_barang: "Olahraga",
    status: "Selesai",
    pembeli: "Henry Allen",
    tanggal_pemesanan: "2023-04-25",
    estimasi_penerimaan: "2023-05-02",
    harga_barang: 1000000,
    jumlah_barang: 1,
    id: 13,
  },
  {
    nama_barang: "Payung",
    tipe_barang: "Aksesori",
    status: "Dalam Proses",
    pembeli: "Victoria Lee",
    tanggal_pemesanan: "2023-04-22",
    estimasi_penerimaan: "2023-04-29",
    harga_barang: 50000,
    jumlah_barang: 2,
    id: 14,
  },
  {
    nama_barang: "Kalung",
    tipe_barang: "Aksesori",
    status: "Selesai",
    pembeli: "Alexander Scott",
    tanggal_pemesanan: "2023-04-20",
    estimasi_penerimaan: "2023-04-27",
    harga_barang: 75000,
    jumlah_barang: 1,
    id: 15,
  },
  {
    nama_barang: "Tas Tangan",
    tipe_barang: "Pakaian",
    status: "Dalam Proses",
    pembeli: "Natalie Rodriguez",
    tanggal_pemesanan: "2023-04-18",
    estimasi_penerimaan: "2023-04-25",
    harga_barang: 200000,
    jumlah_barang: 2,
    id: 16,
  },
  {
    nama_barang: "Dumbbell",
    tipe_barang: "Olahraga",
    status: "Selesai",
    pembeli: "Christopher Hill",
    tanggal_pemesanan: "2023-04-15",
    estimasi_penerimaan: "2023-04-22",
    harga_barang: 150000,
    jumlah_barang: 1,
    id: 17,
  },
  {
    nama_barang: "Konsol Game",
    tipe_barang: "Elektronik",
    status: "Dalam Proses",
    pembeli: "Isabella Young",
    tanggal_pemesanan: "2023-04-12",
    estimasi_penerimaan: "2023-04-19",
    harga_barang: 400000,
    jumlah_barang: 1,
    id: 18,
  },
  {
    nama_barang: "Speaker",
    tipe_barang: "Elektronik",
    status: "Selesai",
    pembeli: "Joseph Green",
    tanggal_pemesanan: "2023-04-10",
    estimasi_penerimaan: "2023-04-17",
    harga_barang: 250000,
    jumlah_barang: 2,
    id: 19,
  },
  {
    nama_barang: "Drone",
    tipe_barang: "Elektronik",
    status: "Dalam Proses",
    pembeli: "Sophia Taylor",
    tanggal_pemesanan: "2023-04-07",
    estimasi_penerimaan: "2023-04-14",
    harga_barang: 800000,
    jumlah_barang: 1,
    id: 20,
  },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "nama_barang",
    numeric: false,
    disablePadding: true,
    label: "Nama Barang",
  },
  {
    id: "tipe_barang",
    numeric: false,
    disablePadding: false,
    label: "Tipe Barang",
  },
  // {
  //   id: "pembeli",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Pembeli",
  // },
  {
    id: "tanggal_pemesanan",
    numeric: false,
    disablePadding: false,
    label: "Tanggal Pemesanan",
  },
  // {
  //   id: "estimasi_penerimaan",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Estimasi Penerimaan",
  // },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "harga_barang",
    numeric: true,
    disablePadding: false,
    label: "Harga",
  },
  {
    id: "jumlah_barang",
    numeric: true,
    disablePadding: false,
    label: "Jumlah",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

export default function ListTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("nama_barang");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [drawerDetail, setDrawerDetail] = useState(false);
  const [drawerEdit, setDrawerEdit] = useState(false);

  const [setData, setSetData] = useState(rows);
  const [emptyData, setEmptyData] = useState([]);

  const [filteredData, setFilteredData] = useState(rows);
  const [filterValue, setFilterValue] = useState("");

  const [searchText, setSearchText] = useState("");

  const [idDrawer, setIdDrawer] = useState("");

  const [tag, setTag] = useState([
    "Pakaian",
    "Elektronik",
    "Buku",
    "Olahraga",
    "Aksesoris",
  ]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleChangeMarkTag = (event: any) => {
    const {
      target: { value },
    } = event;
    setTag(typeof value === "string" ? value.split(",") : value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setFilterValue(selectedValue);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = setData.map((n) => n.nama_barang);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowClick = (row: any) => {
    setDrawerDetail(true);
    setDrawerEdit(false);
    setIdDrawer(row);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - setData.length) : 0;

  const visibleRows = React.useMemo(() => {
    let filteredData = filterValue
      ? setData.filter((item) => item.status === filterValue)
      : setData;

    if (tag) {
      const tags = Array.isArray(tag) ? tag : [tag];
      filteredData = filteredData.filter((item) => {
        const itemTags = Array.isArray(item.tipe_barang)
          ? item.tipe_barang
          : [item.tipe_barang];
        return itemTags.some((tagItem) => tags.includes(tagItem));
      });
    }

    if (searchText) {
      filteredData = filteredData.filter((item) =>
        item.nama_barang.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return stableSort(filteredData, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [
    setData,
    order,
    orderBy,
    page,
    rowsPerPage,
    filterValue,
    tag,
    searchText,
  ]);

  const handleResetClick = () => {
    setFilterValue("");
    setSearchText("");
    setTag(["Pakaian", "Elektronik", "Buku", "Olahraga", "Aksesoris"]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Stack
          gap={2}
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          sx={{ px: 2, py: 2 }}
        >
          <SearchBarComponent
            onChange={handleSearchChange}
            valueSearch={searchText}
          />
          <Stack gap={2} direction="row" alignItems="center">
            <FilterSelect
              options={["Dalam Proses", "Selesai"]}
              value={filterValue}
              onChange={handleFilterChange}
            />
            <Checkmarks
              options={[
                "Pakaian",
                "Elektronik",
                "Buku",
                "Olahraga",
                "Aksesoris",
              ]}
              filterValue={tag}
              onChange={handleChangeMarkTag}
            />
            <ResetButton onClick={handleResetClick} />
          </Stack>
        </Stack>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={setData.length}
            />

            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.nama_barang);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.nama_barang}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      padding="checkbox"
                      onClick={(event) => handleClick(event, row.nama_barang)}
                    >
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      onClick={(e) => handleRowClick(row.id)}
                    >
                      {row.nama_barang}
                    </TableCell>
                    <TableCell
                      align="left"
                      onClick={(e) => handleRowClick(row.id)}
                    >
                      {row.tipe_barang}
                    </TableCell>
                    <TableCell
                      align="left"
                      onClick={(e) => handleRowClick(row.id)}
                    >
                      {row.tanggal_pemesanan}
                    </TableCell>
                    <TableCell
                      align="left"
                      onClick={(e) => handleRowClick(row.id)}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(e) => handleRowClick(row.id)}
                    >
                      {row.harga_barang}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(e) => handleRowClick(row.id)}
                    >
                      {row.jumlah_barang}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={setData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <>
        <Drawer
          anchor="right"
          open={drawerDetail}
          onClose={() => {
            setDrawerDetail(false);
            setDrawerEdit(false);
          }}
        >
          <DetailDrawerContact data={rows} idDrawer={idDrawer} />
        </Drawer>
      </>
    </Box>
  );
}

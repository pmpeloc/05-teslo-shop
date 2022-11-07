import { Chip, Link, Grid, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layouts';
import NextLink from 'next/link';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra información si está pagada la orden o no',
    width: 200,
    renderCell: (params) => {
      return params.value ? (
        <Chip color='success' label='Pagada' variant='outlined' />
      ) : (
        <Chip color='error' label='No pagada' variant='outlined' />
      );
    },
  },
  {
    field: 'orden',
    headerName: 'Ver orden',
    width: 200,
    sortable: false,
    renderCell: (params) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline='always'>Ver orden</Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  { id: 1, paid: true, fullname: 'Misael Peloc' },
  { id: 2, paid: false, fullname: 'Pedro Perez' },
  { id: 3, paid: false, fullname: 'Maria Azucena' },
  { id: 4, paid: true, fullname: 'Teresa Rios' },
  { id: 5, paid: true, fullname: 'Pablo Perez' },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title='Historial de Ordenes'
      pageDescription='Historial de ordenes del cliente'>
      <Typography variant='h1' component='h1'>
        Historial de ordenes
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;

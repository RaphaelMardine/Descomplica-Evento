
import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid, Paper, Typography } from '@mui/material';


export default function Orders(data) {
  return (
      <>
        {console.log(data)}
        <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', border: "1px solid #DCDCDC", mt: 4, width: "70%", margin: "0 auto" }}>
      <Typography color="#1976d2" sx={{fontSize: "1.25rem"}}>Recent Orders</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.eventName}</TableCell>
              <TableCell>{row.adress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
              </Grid>
    </>
  );
}
import React from 'react';
import { Box, Grid, Paper, Typography, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';

const ShelfCell = ({ code, level }) => (
  <TableCell align="center" sx={{ border: 1, borderColor: 'grey.300', padding: '2px', fontSize: '0.7rem' }}>
    {code}-{level.toString().padStart(2, '0')}
  </TableCell>
);

const ShelfRow = ({ prefix, count, level }) => (
  <TableRow>
    {[...Array(count)].map((_, index) => (
      <ShelfCell key={index} code={`${prefix}${index + 1}`} level={level} />
    ))}
    <TableCell align="center" sx={{ border: 1, borderColor: 'grey.300', padding: '2px', fontSize: '0.7rem' }}>{level}</TableCell>
  </TableRow>
);

const ShelfTable = ({ prefix, count, levels, bgcolor }) => (
  <TableContainer component={Paper} sx={{ mb: 1, bgcolor }}>
    <Table size="small">
      <TableBody>
        {[...Array(levels)].map((_, index) => (
          <ShelfRow key={index} prefix={prefix} count={count} level={levels - index} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const LayoutComponent = () => (
  <Box sx={{ overflow: 'auto', height: '100vh', width: '100vw' }}>
    <Grid container spacing={1} sx={{ p: 1, minWidth: 1200 }}>
      {/* Top shelves */}
      <Grid item xs={6}>
        <ShelfTable prefix="A01-" count={8} levels={4} bgcolor="#FFFF99" />
      </Grid>
      <Grid item xs={6}>
        <ShelfTable prefix="A02-" count={4} levels={4} bgcolor="#FFFF99" />
      </Grid>
      
      {/* TV */}
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ p: 1, bgcolor: 'black', color: 'white', textAlign: 'center' }}>
          <Typography>โทรทัศน์</Typography>
        </Paper>
      </Grid>
      
      {/* Main layout */}
      <Grid item container xs={12} spacing={1}>
        {/* Left side */}
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ p: 1, mb: 1, bgcolor: '#FF9999' }}>
            <Typography>B01 Cashier</Typography>
          </Paper>
          <Paper elevation={3} sx={{ p: 1, bgcolor: '#FF9999' }}>
            <Typography>B02 Cashier</Typography>
          </Paper>
        </Grid>
        
        {/* Center */}
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ p: 1, height: 150, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box display="flex" justifyContent="space-around">
              <Paper elevation={1} sx={{ p: 1, bgcolor: '#FFE4B5' }}>น้ำผู้หญิง</Paper>
              <Paper elevation={1} sx={{ p: 1, bgcolor: '#FFE4B5' }}>น้ำผู้ชาย</Paper>
            </Box>
            <Box sx={{ bgcolor: '#FF9999', p: 1, alignSelf: 'center' }}>
              <Typography>เตียงผู้ป่วย</Typography>
            </Box>
          </Paper>
        </Grid>
        
        {/* Right side */}
        <Grid item xs={3}>
          <ShelfTable prefix="D01-" count={4} levels={4} bgcolor="#FFFF99" />
        </Grid>
      </Grid>
      
      {/* Bottom shelves */}
      <Grid item container xs={12} spacing={1}>
        <Grid item xs={2}>
          <ShelfTable prefix="B03-" count={1} levels={2} bgcolor="#FF9999" />
          <ShelfTable prefix="B04-" count={4} levels={4} bgcolor="#FF9999" />
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3} sx={{ p: 1, bgcolor: '#FF9999', mb: 1 }}>
            <Typography variant="caption">B05-A01 B05-A02</Typography>
            <Typography variant="caption">B05-B01 B05-B02</Typography>
            <Typography variant="caption">บน โต๊ะ B5-A03</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3} sx={{ p: 1, bgcolor: '#FF9999', mb: 1 }}>
            <Typography variant="caption">B06-A01 B06-A02</Typography>
            <Typography variant="caption">B06-B01 B06-B02</Typography>
            <Typography variant="caption">บน โต๊ะ B06-A03</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <ShelfTable prefix="C01-" count={7} levels={4} bgcolor="#FFFF99" />
        </Grid>
        <Grid item xs={3}>
          <ShelfTable prefix="C02-" count={4} levels={4} bgcolor="#FFFF99" />
        </Grid>
      </Grid>
      
      {/* TV screens */}
      <Grid item container xs={12} spacing={1} justifyContent="space-between">
        {[1, 2, 3].map((tv) => (
          <Grid item xs={3} key={tv}>
            <Paper elevation={3} sx={{ p: 1, bgcolor: '#99CCFF', textAlign: 'center' }}>
              <Typography>โทรทัศน์</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Box>
);

export default LayoutComponent;
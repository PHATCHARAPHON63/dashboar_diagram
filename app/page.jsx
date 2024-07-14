import React from 'react';
import { Box, Grid, Paper, Typography, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';

// คอมโพเนนต์สำหรับสร้างเซลล์เดี่ยวในชั้นวาง
const ShelfCell = ({ content, bgcolor = '#FFFF99' }) => (
  <TableCell align="center" sx={{ border: 1, borderColor: 'grey.300', padding: '2px', fontSize: '0.7rem', bgcolor }}>
    {content}
  </TableCell>
);

// คอมโพเนนต์สำหรับสร้างแถวของชั้นวาง
const ShelfRow = ({ prefix, count, level }) => (
  <TableRow>
    {[...Array(count)].map((_, index) => (
      <ShelfCell key={index} code={`${prefix}${String.fromCharCode(65 + index)}`} level={level} />
    ))}
    <TableCell align="center" sx={{ border: 1, borderColor: 'grey.300', padding: '2px', fontSize: '0.7rem' }}>{level}</TableCell>
  </TableRow>
);

// คอมโพเนนต์สำหรับสร้างตารางชั้นวางทั้งหมด
const ShelfTable = ({ prefix, count, levels, bgcolor, customCells }) => (
  <TableContainer component={Paper} sx={{ mb: 1, bgcolor, height: '100%' }}>
    <Table size="small"sx={{ height: '100%' }}>
      <TableBody>
        {[...Array(levels)].map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {customCells ? (
              customCells[levels - rowIndex - 1].map((cell, cellIndex) => (
                <TableCell key={cellIndex} align="center" sx={{ border: 1, borderColor: 'grey.300', padding: '2px', fontSize: '0.7rem' }}>
                  {cell}
                </TableCell>
              ))
            ) : (
              [...Array(count)].map((_, index) => (
                <ShelfCell key={index} code={`${prefix}${String.fromCharCode(65 + index)}`} level={levels - rowIndex} />
              ))
            )}
            <TableCell align="center" sx={{ border: 1, borderColor: 'grey.300', padding: '2px', fontSize: '0.7rem' }}>{levels - rowIndex}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);


// คอมโพเนนต์หลักสำหรับเลย์เอาต์ทั้งหมด
const LayoutComponent = () => (
  // กำหนดให้ Box เป็น container หลัก มีการ scroll ได้และมีขนาดเต็มหน้าจอ
  <Box sx={{ overflow: 'auto'}}>
    {/* Grid container หลัก กำหนดความกว้างขั้นต่ำ 1200px */}
    <Grid container spacing={1} sx={{ p: 1, minWidth: 1600 }}>
    <Grid item xs={2} />
    <Grid item xs={4}>
        <ShelfTable
          prefix="A01-"
          count={8}
          levels={4}
          bgcolor="#FFFF99"
          customCells={[
            ['A01-D01', 'A01-D02', 'A01-D03', 'A01-D04', 'A01-D05', 'A01-D06', 'A01-D07', 'A01-D08'],
            ['A01-C01', 'A01-C02', 'A01-C03', 'A01-C04', 'A01-C05', 'A01-C06', 'A01-C07', 'A01-C08'],
            ['A01-B01', 'A01-B02', 'A01-B03', 'A01-B04', 'A01-B05', 'A01-B06', 'A01-B07', 'A01-B08'],
            ['A01', '', '', '', '', '', '', '']
          ]}
        />
      </Grid>

      {/* ช่องว่าง */}
      <Grid item xs={2} />

      {/* ร้านขายยา (อยู่ห่างออกไป) */}
      <Grid item xs={2}>
        <Paper elevation={3} sx={{ p: 2, bgcolor: '#808080', color: 'white', textAlign: 'center', height: '100%' }}>
          <Typography variant="h6">ร้านขายยา</Typography>
        </Paper>
      </Grid>

      {/* โทรทัศน์ใต้ A01 และ A02 ด้านขวา */}
      <Grid item container xs={12} spacing={1} alignItems="flex-start" sx={{ mt: 1 }}>
        {/* โทรทัศน์ */}
        <Grid item xs={3} />
        <Grid item xs={2}>
          <Paper elevation={3} sx={{ p: 0.5, bgcolor: 'black', color: 'white', textAlign: 'center' }}>
            <Typography variant="caption">โทรทัศน์</Typography>
          </Paper>
        </Grid>
        {/* ช่องว่าง */}
        <Grid item xs={1} />
        {/* A02 */}
        <Grid item xs={1}>
          <ShelfTable
            prefix="A02-"
            count={2}
            levels={4}
            bgcolor="#FFFF99"
            customCells={[
              ['A02-D01', 'A02-D02'],
              ['A02-C01', 'A02-C02'],
              ['A02-B01', 'A02-B02'],
              ['A01-A01', 'A02-A02']
            ]}
          />
        </Grid>
      </Grid>
      
     
      <Grid item container xs={12} spacing={1}>
        {/* (แคชเชียร์) */}
        <Grid item xs={2} />
        <Grid item xs={4}>
          <Paper elevation={3} sx={{ p: 1, height: 150,bgcolor: '#808080', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box display="flex" justifyContent="space-around">
            </Box>
          </Paper>
        </Grid>
        {/* ด้านขวา (ชั้นวาง D01 และห้องเก็บของ) */}
        <Grid item xs={2}>
          <ShelfTable prefix="D01-" count={2} levels={4} bgcolor="#FFFF99" />
          <Paper elevation={3} sx={{ p: 1, mt: 1, bgcolor: '#4B3621', color: 'white', textAlign: 'center' }}>
            <Typography>ห้องเก็บของ</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
    
    <Grid item container xs={12} spacing={1}>
      <Grid item xs={2}>
        <Paper elevation={3} sx={{ p: 1, mb: 1, bgcolor: '#FF9999' }}>
          <Typography>B01 Cashier</Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 1, bgcolor: '#FF9999' }}>
          <Typography>B02 Cashier</Typography>
        </Paper>
      </Grid>
    </Grid>    



      {/* ชั้นวางด้านล่าง */}
      <Grid item container xs={12} spacing={1}>
        <Grid item xs={2}>
          <ShelfTable prefix="B03-" count={1} levels={2} bgcolor="#FF9999" />
          <ShelfTable prefix="B04-" count={4} levels={4} bgcolor="#FF9999" />
        </Grid>
        <Grid item xs={1}>
          <Paper elevation={3} sx={{ p: 1, bgcolor: '#FF9999', mb: 1 }}>
            <Typography variant="caption">B05-A01 B05-A02</Typography>
            <Typography variant="caption">B05-B01 B05-B02</Typography>
            <Typography variant="caption">บน โต๊ะ B5-A03</Typography>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper elevation={3} sx={{ p: 1, bgcolor: '#FF9999', mb: 1 }}>
            <Typography variant="caption">B06-A01 B06-A02</Typography>
            <Typography variant="caption">B06-B01 B06-B02</Typography>
            <Typography variant="caption">บน โต๊ะ B06-A03</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <ShelfTable prefix="C01-" count={7} levels={4} bgcolor="#FFFF99" />
        </Grid>
        <Grid item xs={2}>
          <ShelfTable prefix="C02-" count={4} levels={4} bgcolor="#FFFF99" />
        </Grid>
        <Grid item xs={1}>
          <ShelfTable prefix="D03-" count={1} levels={4} bgcolor="#FFFF99" />
        </Grid>
        <Grid item xs={2}>
          <ShelfTable prefix="D04-" count={4} levels={4} bgcolor="#FFFF99" />
        </Grid>
      </Grid>
      
      {/* โทรทัศน์ด้านล่าง */}
      <Grid item container xs={12} spacing={1} justifyContent="space-between">
        {[1, 2, 3].map((tv) => (
          <Grid item xs={3} key={tv}>
            <Paper elevation={3} sx={{ p: 1, bgcolor: '#99CCFF', textAlign: 'center' }}>
              <Typography>โทรทัศน์</Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: 1, bgcolor: 'black', color: 'white', textAlign: 'center', mt: 1 }}>
              <Typography>โทรทัศน์</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    
  </Box>
);

export default LayoutComponent;
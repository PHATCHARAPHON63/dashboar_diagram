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
    <Table size="small" sx={{ height: '100%' }}>
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
  <Box>
    <Grid container item xs={12} spacing={0} sx={{ mt: 2, overflowX: 'auto' }}>
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

      <Grid item xs={2} />

      <Grid item xs={2}>
        <Paper elevation={3} sx={{ p: 2, bgcolor: '#808080', color: 'white', textAlign: 'center', height: '100%' }}>
          <Typography variant="h6">ร้านขายยา</Typography>
        </Paper>
      </Grid>

      <Grid item container xs={12} spacing={1} alignItems="flex-start" sx={{ mt: 1 }}>
        <Grid item xs={3} />
        <Grid item xs={2}>
          <Paper elevation={3} sx={{ p: 0.5, bgcolor: 'black', color: 'white', textAlign: 'center' }}>
            <Typography variant="caption">โทรทัศน์</Typography>
          </Paper>
        </Grid>
        <Grid item xs={1} />
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
        <Grid item xs={2} />
        <Grid item xs={4}>
          <Paper elevation={3} sx={{ p: 1, height: 150, bgcolor: '#808080', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box display="flex" justifyContent="space-around">
            </Box>
          </Paper>
        </Grid>
      </Grid>
      
      <Grid item xs={2} />
      
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={1} />
          <Grid item xs={1}>
            <Paper elevation={3} sx={{ p: 1, mb: 1, bgcolor: '#FF9999' }}>
              <Typography>B01 Cashier</Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: 1, bgcolor: '#FF9999' }}>
              <Typography>B02 Cashier</Typography>
            </Paper>
          </Grid>
          <Grid item xs={1} />
          <Grid item container xs={2} spacing={8}>
            <Grid item container xs={10} spacing={2}>
              <Grid item xs={4}>
                <Typography variant="caption" align="center">เก้าอี้นวด</Typography>
                <Paper elevation={3} sx={{ p: 1, height: 60, mt: 1, bgcolor: '#FFE4B5', border: '2px solid black' }} />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="caption" align="center">เก้าอี้ถ่าย</Typography>
                <Paper elevation={3} sx={{ p: 1, height: 60, mt: 1, bgcolor: '#FFE4B5', border: '2px solid black' }} />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="caption" align="center">เเก้าอี้ถ่าย</Typography>
                <Paper elevation={3} sx={{ p: 1, height: 60, mt: 1, bgcolor: '#FFE4B5', border: '2px solid black' }} />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Paper elevation={3} sx={{ p: 1, height: 80, bgcolor: '#FF9999', border: '2px solid black', height: '45px' }}>
                  <Typography align="center" variant="h6">เตียงผู้ป่วย</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={2}>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableBody>
                  {[4, 3, 2, 1].map((level) => (
                    <TableRow key={level}>
                      <TableCell>D01-D0{level}</TableCell>
                      <TableCell>D01-D0{level}</TableCell>
                      <TableCell>{level}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={2}>
            <Paper elevation={3} sx={{ p: 1, height: '120px', width: '100px', mt: 1, bgcolor: '#4B3621', color: 'white', textAlign: 'center' }}>
              <Typography>ห้องเก็บของ</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      
      <Grid container item xs={12} spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={1} />
        <Grid item xs={1}>
          <ShelfTable
            prefix="B03-"
            count={2}
            levels={2}
            bgcolor="#FFFF99"
            customCells={[
              ['B03-B01', 'B03-B02'],
              ['B03-A01', 'B03-A02']
            ]}
          />
        </Grid>
        <Grid item xs={2}>
          <ShelfTable
            prefix="B04-"
            count={4}
            levels={4}
            bgcolor="#FFFF99"
            customCells={[
              ['B04-D01', 'B04-D02', 'B04-D03', 'B04-D04'],
              ['B04-C01', 'B04-C02', 'B04-C03', 'B04-C04'],
              ['B04-B01', 'B04-B02', 'B04-B03', 'B04-B04'],
              ['B04-A01', 'B04-A02', 'B04-A03', 'B04-A04']
            ]}
          />
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={2}>
          <ShelfTable
            prefix="C01-"
            count={6}
            levels={4}
            bgcolor="#FFFF99"
            customCells={[
              ['C01-D01', 'C01-D02', 'C01-D03', 'C01-D04', 'C01-D05', 'C01-D06'],
              ['C01-C01', 'C01-C02', 'C01-C03', 'C01-C04', 'C01-C05', 'C01-C06'],
              ['C01-B01', 'C01-B02', 'C01-B03', 'C01-B04', 'C01-B05', 'C01-B06'],
              ['C01-A01', 'C01-A02', 'C01-A03', 'C01-A04', 'C01-A05', 'C01-A06']
            ]}
          />
        </Grid>
        <Grid item xs={2}>
          <ShelfTable
            prefix="D02-"
            count={6}
            levels={4}
            bgcolor="#FFFF99"
            customCells={[
              ['D02-D01', 'D02-D02', 'D02-D03', 'D02-D04', 'D02-D05', 'D02-D06'],
              ['D02-C01', 'D02-C02', 'D02-C03', 'D02-C04', 'D02-C05', 'D02-C06'],
              ['D02-B01', 'D02-B02', 'D02-B03', 'D02-B04', 'D02-B05', 'D02-B06'],
              ['D02-A01', 'D02-A02', 'D02-A03', 'D02-A04', 'D02-A05', 'D02-A06']
            ]}
          />
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={0} sx={{ mt: 2, overflowX: 'auto', display: 'flex', flexWrap: 'nowrap', minWidth: '2000px' }}>
          <Grid item xs={4}/>
          <Grid item height="40%">
            <ShelfTable
              prefix="B05-"
              count={2}
              levels={2}
              bgcolor="#FF9999"
              customCells={[
                ['B05-B01', 'B05-B02'],
                ['B05-A01', 'B05-A02']
              ]}
            />
          </Grid>
          <Grid item height="40%">
            <ShelfTable
              prefix="B06-"
              count={2}
              levels={2}
              bgcolor="#FF9999"
              
              customCells={[
                ['B06-B01', 'B06-B02'],
                ['B06-A01', 'B06-A02']
              ]}
            />
            
          </Grid>
          <Grid item sx={{ ml: 2 }} height="70%">
            <ShelfTable
              prefix="C02-"
              count={4}
              levels={4}
              bgcolor="#FFFF99"
              customCells={[
                ['C02-D01', 'C02-D02', 'C02-D03', 'C02-D04'],
                ['C02-C01', 'C02-C02', 'C02-C03', 'C02-C04'],
                ['C02-B01', 'C02-B02', 'C02-B03', 'C02-B04'],
                ['C02-A01', 'C02-A02', 'C02-A03', 'C02-A04']
              ]}
            />
          </Grid>
          <Grid item sx={{ ml: 2 }} height="20%">
            <ShelfTable
              prefix="D03-"
              count={4}
              levels={1}
              bgcolor="#ADD8E6"
              customCells={[
                ['D03-A01', 'D03-A02', 'D03-A03', 'D03-A04']
              ]}
            />
          </Grid>
          <Grid item xs={3}/>
          <Grid item sx={{ ml: 2  ,minWidth: '1200px'}} >
            <ShelfTable
              prefix="D04-"
              count={16}
              levels={6}
              bgcolor="#dae5f6"
              customCells={[
                ['', '', '', '', '', '', '', '', 'D04-F08', '', '', '', '', '', 'D04-F15', 'D04-F16'],
                ['', '', '', '', '', '', '', '', 'D04-E08', '', '', '', '', '', 'D04-E15', 'D04-E16'],
                ['D04-D01', 'D04-D02', 'D04-D03', 'D04-D04', 'D04-D05', 'D04-D06', 'D04-D07', 'D04-D08', 'D04-C10', 'D04-C11', 'D04-C12', 'D04-C13', 'D04-C14', 'D04-D15', 'D04-D16'],
                ['D04-C01', 'D04-C02', 'D04-C03', 'D04-C04', 'D04-C05', 'D04-C06', 'D04-C07', 'D04-C08', 'D04-C09', 'D04-B10', 'D04-B11', 'D04-B12', 'D04-B13', 'D04-B14', 'D04-C15', 'D04-C16'],
                ['D04-B01', 'D04-B02', 'D04-B03', 'D04-B04', 'D04-B05', 'D04-B06', 'D04-B07', 'D04-B08', 'D04-B09', '', '', '', '', '', 'D04-B15', 'D04-B16'],
                ['D04-A01', 'D04-A02', 'D04-A03', 'D04-A04', 'D04-A05', 'D04-A06', 'D04-A07', 'D04-A08', 'D04-A09', 'D04-A10', 'D04-A11', 'D04-A12', 'D04-A13', 'D04-A14', 'D04-A15', 'D04-A16']
              ]}
            />
          </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default LayoutComponent;
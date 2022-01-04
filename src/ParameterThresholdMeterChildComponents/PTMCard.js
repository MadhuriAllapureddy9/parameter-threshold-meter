import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import AddParameterModal from './AddParameterModal-copy';
import DropDownCategory from './DropDownCategory';
import DropDownPhase from './DropDownPhase';
import ParameterThresholdTable from './ParameterThresholdTable';
import SearchField from './SearchField'
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';



export default function PTMCard() {

  return (
    <Box sx={{ display: 'flex', p: 1, m: 2, bgcolor: 'background.paper', flexDirection: 'column', }}
        >
      <div align='left'><AddParameterModal /></div>
      <Typography variant="h6" align="left" varient='h2' sx={{pt:2 , m: 0}} >Please Select:</Typography>
      <Grid sx={{ flexGrow: 1, p: 1, m: 0}} container spacing={2}>
  <Grid item xs={3} >
    <DropDownCategory/>
  </Grid>
  <Grid item xs={3}>
  <DropDownPhase/>
  </Grid>
  <Grid item xs={3}>
    
  </Grid>
  <Grid item xs={3}>
    
  </Grid>
</Grid>
      
      <SearchField/>
      <ParameterThresholdTable />
    </Box>
  );
}

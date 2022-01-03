import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import AddParameterModal from './AddParameterModal-copy';
import DropDownCategory from './DropDownCategory';
import DropDownPhase from './DropDownPhase';
import ParameterThresholdTable from './ParameterThresholdTable';
import SearchField from './SearchField'

export default function PTMCard() {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3 },
      }}
      noValidate
      autoComplete="off"
    >
      <div align='left'><AddParameterModal /></div>
      <div align="left">Please Select:</div>
      
      <FormControl>
      <DropDownCategory/>
      </FormControl>
     
      <FormControl >
      <DropDownPhase />
      </FormControl>
      <SearchField/>
      <ParameterThresholdTable />
    </Box>
  );
}

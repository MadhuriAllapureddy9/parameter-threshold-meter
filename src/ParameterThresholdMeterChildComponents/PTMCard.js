import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import AddParameterModal from './AddParameterModal';
import DropDownCategory from './DropDownCategory';
import DropDownPhase from './DropDownPhase';
import ParameterThresholdTable from './ParameterThresholdTable';

export default function ComposedTextField() {

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

      <ParameterThresholdTable />
    </Box>
  );
}

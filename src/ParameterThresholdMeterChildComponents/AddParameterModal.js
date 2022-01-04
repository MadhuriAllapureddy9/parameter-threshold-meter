import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DropDownCategory from './DropDownCategory';
import DropDownPhase from './DropDownPhase';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ModalAppBar from './ModalAppBar';
import ParameterTextField from './ParameterTextField';
import UsernameTextField from './UsernameTextField';
import MinMaxField from './MinField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px light #fff',
  boxShadow: 24,
  p: 0,
};

export default function AddParameterModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Add Parameter</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalAppBar/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <DropDownCategory/>
            </Grid>
            <Grid item xs={6}>
              <DropDownPhase/>
            </Grid>
            <Grid item xs={6}>
              <ParameterTextField/>
            </Grid>
            <Grid item xs={6}>
              <UsernameTextField/>
            </Grid>
            <Grid item xs={6}>
              {/* <MinMaxField/> */}
            </Grid>
            <Grid item xs={6}>
              
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

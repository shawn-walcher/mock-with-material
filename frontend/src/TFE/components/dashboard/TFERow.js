import { Box, Button, Collapse, Grid, IconButton, TableCell, TableRow, Typography } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { TFEContext } from '../../../Context/TFEProvider';

const TFERow = ({ item }) => {
  const { TFE_PATH } = useContext(TFEContext);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  return (
    <>
      <TableRow key={`${item.project_name}-primary`}>
        <TableCell>
          <IconButton area-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Button onClick={() => history.push(`${TFE_PATH}/${item.project_id}`)}>
            {item.project_name}
          </Button>
        </TableCell>
        <TableCell>
          <Typography variant='body1'>{item.project_id}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant='body1'>{item.lifecycle}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant='body1'>{`${item.tfe_management_enabled}`}</Typography>
        </TableCell>
      </TableRow>
      <TableRow key={`${item.project_name}-additional`}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Grid container>
              <Grid item xs={12}>
                <Box margin={1}>
                  <Typography variant='h6' gutterBottom component='div'>
                    Ancestry
                  </Typography>
                  <Typography variant='body1'>{item.ancestry}</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box margin={1}>
                  <Typography variant='h6' gutterBottom component='div'>
                    Owner Name
                  </Typography>
                  <Typography variant='body1'>{item.owner.name}</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box margin={1}>
                  <Typography variant='h6' gutterBottom component='div'>
                    Owner ID
                  </Typography>
                  <Typography variant='body1'>{item.owner.id}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TFERow;

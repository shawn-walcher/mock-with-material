import {
  Box,
  Card,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Collapse,
  Button,
  TablePagination,
} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp, Refresh } from '@material-ui/icons';
import { useState } from 'react';

const TFEDashboard = () => {
  const [open, setOpen] = useState('false');

  return (
    <div>
      <Typography variant='h3' gutterBottom>Welcome to TFE Management</Typography>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='h4'>Project List <IconButton area-label='refresh projects' size='small'><Refresh/></IconButton></Typography>
          {/* TODO: Add filtering */}
          <TableContainer>
            <Table aria-label='collapsible table'>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Name</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Environment</TableCell>
                  <TableCell>GitOps only</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* TODO: Create Backend data and load data dynamically. This will also allow open state to be row specific (currently open affects all rows) */}
                <TableRow>
                  <TableCell>
                    <IconButton area-label='expand row' size='small' onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Button variant='contained' color='secondary'>
                      a-project
                    </Button>
                  </TableCell>
                  <TableCell>a-project-id</TableCell>
                  <TableCell>production</TableCell>
                  <TableCell>false</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                      <Box margin={1}>
                        <Typography variant='h6' gutterBottom component='div'>
                          Ancestry
                        </Typography>
                        primary domain > tfe > payments > production
                        <Typography variant='h6' gutterBottom component='div'>
                          Owner Name
                        </Typography>
                        John Smith
                        <Typography variant='h6' gutterBottom component='div'>
                          Owner ID
                        </Typography>
                        JS1234
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <IconButton area-label='expand row' size='small' onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Button variant='contained' color='secondary'>
                      b-project
                    </Button>
                  </TableCell>
                  <TableCell>b-project-id</TableCell>
                  <TableCell>non-production</TableCell>
                  <TableCell>true</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                      <Box margin={1}>
                        <Typography variant='h6' gutterBottom component='div'>
                          Ancestry
                        </Typography>
                        primary domain > tfe > pivot > non-production
                        <Typography variant='h6' gutterBottom component='div'>
                          Owner Name
                        </Typography>
                        Jane Doe
                        <Typography variant='h6' gutterBottom component='div'>
                          Owner ID
                        </Typography>
                        JD2345
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {/* TODO: Use dynamic data and state information to setup pagination properly */}
          <TablePagination rowsPerPage={[10, 25, 50]} component='div' count={1} rowsPerPage={10} page={0} />
        </CardContent>
      </Card>
    </div>
  );
};

export default TFEDashboard;

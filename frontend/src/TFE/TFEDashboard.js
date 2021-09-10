import {
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
  TablePagination,
  LinearProgress,
  Paper,
} from '@material-ui/core';
import { Refresh } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import TFERow from './TFERow';

const TFEDashboard = () => {
  const [fetching, setFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paginationPage, setPaginationPage] = useState(0);
  const [paginationTotal, setPaginationTotal] = useState(0);
  const [paginationLimit, setPaginationLimit] = useState(10);
  const defaultPaginationLimit = 10;
  const [projects, setProjects] = useState([]);

  const fetchProjects = async (search = undefined, limit = paginationLimit, page = 0) => {
    setFetching(true);
    setErrorMessage('');
    await fetch(`/v1/projects/happy_path?limit=${limit}&page=${page + 1}${search !== undefined ? `&search=${search}` : ''}`, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'mock-token',
      }),
    })
      .then(async (response) => {
        return { status: response.status, data: await response.json() };
      })
      .then(({ status, data }) => {
        if (status >= 400) setErrorMessage('error');
        setProjects(data.projects);
        setPaginationPage(page);
        setPaginationTotal(data.pagination?.total || 0);
        setPaginationLimit(limit);
      });
    setFetching(false);
  };

  const handlePaginationLimitChange = (e) => {
    setPaginationLimit(e.target.value);
    fetchProjects(undefined, e.target.value, 0);
  };

  const handlePageChange = (e, newPage) => {
    setPaginationPage(newPage);
    fetchProjects(undefined, undefined, newPage);
  };

  useEffect(() => {
    fetchProjects(undefined, paginationLimit, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography variant='h3' gutterBottom>
        Welcome to TFE Management
      </Typography>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='h4'>
            Project List
            <IconButton area-label='refresh projects' size='small' onClick={() => fetchProjects(undefined, paginationLimit, paginationPage)}>
              <Refresh />
            </IconButton>
          </Typography>
          {/* TODO: Add filtering */}
          <TableContainer component={Paper}>
            <Table aria-label='collapsible table'>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>
                    <Typography variant='body1'>Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='body1'>ID</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='body1'>Environment</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='body1'>GitOps only</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fetching && (
                  <TableRow key='loading'>
                    <TableCell colSpan={5}>
                      <LinearProgress variant='indeterminate' />
                    </TableCell>
                  </TableRow>
                )}
                {projects.length > 0 && !fetching && projects.map((item, index) => <TFERow item={item} />)}
              </TableBody>
            </Table>
          </TableContainer>
          {paginationTotal > defaultPaginationLimit && (
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component='div'
              count={paginationTotal}
              rowsPerPage={paginationLimit}
              page={paginationPage}
              onPageChange={(e, newPage) => handlePageChange(e, newPage)}
              onRowsPerPageChange={(e) => handlePaginationLimitChange(e)}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TFEDashboard;

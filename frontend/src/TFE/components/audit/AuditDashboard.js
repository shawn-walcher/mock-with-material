import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

const AuditDashboard = () => {
  return (
    <>
    <Typography variant='h4'>
      Request History
    </Typography>
    <TableContainer component={Paper}>
    <Table aria-label='Table of request history'>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>
            <Typography variant='body1'>Type</Typography>
          </TableCell>
          <TableCell>
            <Typography variant='body1'>Name</Typography>
          </TableCell>
          <TableCell>
            <Typography variant='body1'>Status</Typography>
          </TableCell>
          <TableCell>
            <Typography variant='body1'>Requested By</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* TODO: Add body information */}
        Body info coming soon
      </TableBody>
    </Table>
    </TableContainer>
    {/* TODO: Add pagination */}
    </>
  );
}

export default AuditDashboard
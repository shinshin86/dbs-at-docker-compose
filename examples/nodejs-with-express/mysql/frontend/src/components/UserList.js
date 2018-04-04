import React from 'react'
import Header from './Header'
import UserData from './UserData'
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const UserList = ({ data, classes }) => (
  <div>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { data.map(d => {
            return <UserData key={d.id} data={d} />
          })}
        </TableBody>
      </Table>
    </Paper>
 </div>
)

export default withStyles(styles)(UserList)

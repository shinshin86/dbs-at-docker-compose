import React from 'react'
import { TableCell, TableRow } from 'material-ui/Table';

const UserData = ({ data }) => (
  <TableRow key={data.id}>
    <TableCell>{data.id}</TableCell>
    <TableCell>{data.name}</TableCell>
    <TableCell>{data.role}</TableCell>
  </TableRow>
)

export default UserData

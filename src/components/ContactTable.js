import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Phone', '978-590-0298'),
  createData('LinkedIn','https://www.linkedin.com/in/allan-machado-lowell/'),
  createData('email', 'allan.machado2011@gmail.com'),
  createData('GitHub', 'https://github.com/machada'),
 
];

export default function BasicTable() {
  const classes = useStyles();

  return (
      <Grid xs={10}>
          <h2 className="centered-title" >Lets Talk!</h2>
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
      
     
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  );
}
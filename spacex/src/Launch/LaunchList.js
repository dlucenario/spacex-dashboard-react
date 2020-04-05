import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    tableTitle: {
        color: '#9a9a9a'
    },
    tableHeader: {
        color: '#ffffff',
        textTransform: 'uppercase'
    },
    tableContent: {
        color: '#9a9a9a'
    },
    missionLink: {
        color: '#ffffff',
        textDecoration: 'none'
    },
    customButton: {
        backgroundColor: '#3358f4'
    }
});

export default function LaunchList(props) {
    const materialClasses = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    return(
        <div className = {'customContainer'}>
            <Typography classes = {{root: materialClasses.tableTitle}}>
                Launch List
            </Typography>
            <TableContainer>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell classes = {{root: materialClasses.tableHeader}} >mission name</TableCell>
                        <TableCell classes = {{root: materialClasses.tableHeader}} align="right">flight #</TableCell>
                        <TableCell classes = {{root: materialClasses.tableHeader}} align="right">launch date</TableCell>
                        <TableCell classes = {{root: materialClasses.tableHeader}} align="right">customer</TableCell>
                        <TableCell classes = {{root: materialClasses.tableHeader}} align="right">view</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>

                        {(rowsPerPage > 0
                            ? props.launchList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : props.launchList
                        ).map((row) => (
                        <TableRow key={row.flight_number+'-'+row.mission_name}>
                        <TableCell component="th" scope="row">

                                <NavLink to={`/launch/${row.flight_number}`} className = {materialClasses.missionLink}>
                                    {row.mission_name}
                                </NavLink>

                        </TableCell>
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.flight_number}</TableCell>
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.date}</TableCell>
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.customer}</TableCell>
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">
                            <Button classes = {{root: materialClasses.customButton }} variant="contained" size="small" 
                                    startIcon={< ArrowDownwardIcon style = {{fill: '#ffffff'}} />}>
                                <NavLink to={`/launch/${row.flight_number}`} className = {materialClasses.missionLink}>
                                    VIEW
                                </NavLink>
                            </Button>
                        </TableCell> 
                        </TableRow>
                    ))}
                    
                    </TableBody>
                    <TableFooter >
                        <TableRow >
                            <TablePagination
                            classes = {{root: materialClasses.tableContent}}
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={5}
                            count={props.launchList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    )
}

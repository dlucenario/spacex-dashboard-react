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
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';

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
    tableContentGreen: {
        color: 'green'
    },
    tableContentRed: {
        color: 'red'
    },
    missionLink: {
        color: '#ffffff',
        textDecoration: 'none'
    },
    linkContainer: {

        padding: '5px',
        borderRadius: '5px',

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
                        <TableCell classes = {{root: materialClasses.tableHeader}} align="right">rocket</TableCell>
                        <TableCell classes = {{root: materialClasses.tableHeader}} align="right">customer</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>

                        {(rowsPerPage > 0
                            ? props.launchList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : props.launchList
                        ).map((row) => (
                        <TableRow key={row.mission_name}>
                        <TableCell component="th" scope="row">

                                <NavLink to={`/launch/${row.flight_number}`} className = {materialClasses.missionLink}>
                                    {row.mission_name}
                                    <IconButton className = {materialClasses.missionLink}  aria-label="delete">
                                        <HelpIcon />
                                    </IconButton>
                                </NavLink>

                        </TableCell>
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.flight_number}</TableCell>
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.date}</TableCell>
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.rocket}</TableCell>   
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.customer}</TableCell>
                        </TableRow>
                    ))}

                    {/* {props.launchList.map(row => (
                        <TableRow key={row.mission_name}>
                        <TableCell classes = {{root: materialClasses.tableContent}} component="th" scope="row">
                            {row.mission_name}
                        </TableCell>
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.flight_number}</TableCell>
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.date}</TableCell>
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.rocket}</TableCell>   
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.customer}</TableCell>
                        </TableRow>
                    ))} */}
                    
                    </TableBody>
                    <TableFooter >
                        <TableRow >
                            <TablePagination
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

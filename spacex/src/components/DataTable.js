import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

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
    }
});

export default function DataTable(props) {
    const materialClasses = useStyles();

    let tableData =
    <TableRow>
       <TableCell>
           No Data Available
       </TableCell>
       <TableCell>
           No Data Available
       </TableCell>
   </TableRow>

   if(props.dataTable !== undefined) {
       tableData = Object.keys(props.dataTable).map( (element) => {
           const tableElement = 
           <TableRow key = {props.dataTable[element].text}>
               <TableCell classes = {{root: materialClasses.tableHeader}}>
                   {props.dataTable[element].text}
               </TableCell>
               <TableCell classes = {{root: materialClasses.tableContent}}>
                   {props.dataTable[element].value}
               </TableCell>
           </TableRow>

           return tableElement;
       });
   }

    return(
        
    <div>
        <TableContainer>
            <Table>
            <TableBody>
                {tableData}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
    )

}
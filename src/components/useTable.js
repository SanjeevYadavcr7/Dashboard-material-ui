import React, { useState } from 'react'
import { makeStyles, Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '400'
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        }
    }
}))



const useTable = (records, headCells, searchText) => {
    
    const classes = useStyles(); 

    const pages = [5, 10, 20];
    const [page, setPage] = useState(0);
    const [rowPerPage, setRowPerPage] = useState(pages[page]);
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();

    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {
        
        const handleSortRequest = (cellId) => {
            const isAsc = (orderBy === cellId) && (order === 'asc');
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(cellId);
        }
        
        return(
            <TableHead>
                <TableRow>
                    {
                        headCells.map((headCell) => (
                                <TableCell align="center" key={headCell.id}
                                sortDirection={orderBy === headCell.id ? order : false}>
                                    <TableSortLabel
                                        active={orderBy === headCell.id}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        onClick={() => {handleSortRequest(headCell.id)}}
                                    >
                                        {headCell.label}
                                    </TableSortLabel> 
                                </TableCell>                        
                            )
                        )
                    }
                </TableRow>
            </TableHead>
        )
    }

    ///////////////  MUi Pagination   ///////////////////////
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowPerPage(parseInt(event.target.value, 10))
        setPage(0);
    }

    const TblPagination = () =>(
        <TablePagination
            component='div'
            page={page}
            rowsPerPage={rowPerPage}
            rowsPerPageOptions={pages}
            count={records.length}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
    ///////////////  MUi Pagination ends   ///////////////////////

    const descendingOrder = (a, b, orderBy) => {
        if(a[orderBy] > b[orderBy]) return -1;
        if(a[orderBy] < b[orderBy]) return 1;
        return 0;
    }

    const getComparator = (order, orderBy) => {
        return order === 'desc' 
            ? (a,b) => descendingOrder(a,b,orderBy)
            : (a,b) => -descendingOrder(a,b,orderBy);
    }

    const sortRecords = (records, comparator) => {
        const newRecords = records.map((item, i) => [item, i]);
        newRecords.sort((a,b) => {
            const order = comparator(a[0],b[0]);
            if(order !== 0) return order;
            return a[1]-b[1];
        })
        return newRecords.map((item) => item[0]);
    }

    const recordsAfterPagingAndSorting = () => {    

        const filteredRecords = records.filter((item) => {
            if(searchText === '')return item;
            else return item.fullName.toLowerCase().includes(searchText);
        })
        const sortedRecords = sortRecords(filteredRecords,getComparator(order, orderBy));
        return sortedRecords.slice(page*rowPerPage, (page+1)*rowPerPage);
    }

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}

export default useTable

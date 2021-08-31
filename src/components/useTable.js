import React, { useState } from 'react'
import { makeStyles, Table, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core'


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



const useTable = (records, headCells) => {
    
    const classes = useStyles(); 

    const pages = [5, 10, 20];
    const [page, setPage] = useState(0);
    const [rowPerPage, setRowPerPage] = useState(pages[page]);


    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {
        return(
            <TableHead>
                <TableRow>
                    {
                        headCells.map((headCell) => (
                                <TableCell align="center" key={headCell.id}>
                                    {headCell.label} 
                                </TableCell>                        
                            )
                        )
                    }
                </TableRow>
            </TableHead>
        )
    }

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
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    )

    const recordsAfterPagingAndSorting = () => {
        return records.slice(page*rowPerPage, (page+1)*rowPerPage);
    }

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}

export default useTable

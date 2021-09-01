import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, InputAdornment, Toolbar } from '@material-ui/core';
import useTable from '../../components/useTable'; 
import * as EmployeeService from '../../services/EmployeeService';
import Controls from '../../components/controls/Controls';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))

const headCells = [
    {id: 'fullName', label: 'Employee Name'},
    {id: 'email', label: 'Email Address (Personal)'},
    {id: 'mobile', label: 'Mobile Number'},
    {id: 'departmentId', label: 'Department'},
]

const Employees = () => {

    const classes = useStyles();
    const [searchText, setSearchText] = useState('');
    const [records, setRecords] = useState(EmployeeService.getAllEmployees());
    const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(records, headCells, searchText);


    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <>
            <PageHeader 
                title='Employee Registration' 
                subtitle='*new employees have to register through this portal'
                icon={ <PeopleOutlineTwoToneIcon fontSize='large' />} 
            />
            <Paper className={classes.pageContent }>
                {/* <EmployeeForm /> */}
                
                <Toolbar>
                    <Controls.Input
                        label='Search Employees'
                        className={classes.searchInput}
                        InputProps = {{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Search />
                                </InputAdornment>
                                )
                            }}
                        onChange={handleSearch}
                    />
                </Toolbar>

                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell align="center">{item.fullName}</TableCell>        
                                        <TableCell align="center">{item.email}</TableCell>        
                                        <TableCell align="center">{item.mobile}</TableCell>        
                                        <TableCell align="center">{EmployeeService.getDepartmentName(item.departmentId)}</TableCell>        
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
    )
}

export default Employees

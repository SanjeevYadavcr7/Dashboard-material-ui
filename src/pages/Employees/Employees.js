import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell } from '@material-ui/core';
import useTable from '../../components/useTable'; 
import * as EmployeeService from '../../services/EmployeeService';

const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const headCells = [
    {id: 'fullName', label: 'Employee Name'},
    {id: 'email', label: 'Email Address (Personal)'},
    {id: 'mobile', label: 'Mobile Number'},
    {id: 'department', label: 'Department'},
]

const Employees = () => {

    const classes = useStyles();
    const [records, setRecords] = useState(EmployeeService.getAllEmployees());
    const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(records, headCells);


    return (
        <>
            <PageHeader 
                title='Employee Registration' 
                subtitle='*new employees have to register through this portal'
                icon={ <PeopleOutlineTwoToneIcon fontSize='large' />} 
            />
            <Paper className={classes.pageContent }>
                {/* <EmployeeForm /> */}
                
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

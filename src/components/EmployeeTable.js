import React, {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import {Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {loadData, deleteUser} from "../actions/employeeAction";
import CircularProgress from '@mui/material/CircularProgress';

const EmployeeTable = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadData());
    },[dispatch]);
    const { employee, isLoading } = useSelector(state => state.employee)
    const handleDelete = (id) => {
     dispatch(deleteUser(id))
    }


    return (
        <>
         { isLoading
             ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '300px'}}>
                 <CircularProgress/>
             </div>
             : <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="customized table">
                <TableHead style={{ background: "black" }}>
                    <TableRow>
                        <TableCell style={{ color: "white" }}>First Name</TableCell>
                        <TableCell style={{ color: "white" }}>Last Name</TableCell>
                        <TableCell style={{ color: "white" }}>Email</TableCell>
                        <TableCell style={{ color: "white" }}>Mobile Number</TableCell>
                        <TableCell style={{ color: "white" }}>Salary</TableCell>
                        <TableCell style={{ color: "white" }} align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employee.map((user) => (
                        <StyledTableRow
                            key={user._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell  component="th" scope="row">
                                {user.firstName}
                            </StyledTableCell >
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phoneNumber}</TableCell>
                            <TableCell>{user.salary + '$'}</TableCell>
                            <TableCell align={"center"}>
                                <Button variant="outlined" color="secondary" >Edit</Button>
                                <Button variant="outlined" color="secondary" onClick={() => handleDelete(user._id)}>Delete</Button>
                            </TableCell>
                        </StyledTableRow >
                    ))}
                </TableBody>
            </Table>
        </TableContainer>}
        </>
    )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default EmployeeTable
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import { getData, deleteData } from "../api";
import ModalEmployee from "./ModalEmployee";

const EmployeeTable = ({ setIsOpen, isOpen }) => {
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios.get(getData()).then((res) => {
      setEmployeeData(res.data.data.users);
      setIsLoading(false);
    });
  }, []);
  function deleteEmployee(id) {
    axios.delete(deleteData(id)).then((res) => {
      setEmployeeData((prevState) =>
        prevState.filter((item) => item._id !== res.data.data.user._id)
      );
    });
  }
  const handleEdit = (user) => {
    setIsOpen(true);
    setUserInfo(user);
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "300px",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead style={{ background: "black" }}>
              <TableRow>
                <TableCell style={{ color: "white" }}>First Name</TableCell>
                <TableCell style={{ color: "white" }}>Last Name</TableCell>
                <TableCell style={{ color: "white" }}>Email</TableCell>
                <TableCell style={{ color: "white" }}>Mobile Number</TableCell>
                <TableCell style={{ color: "white" }}>Salary</TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeeData?.map((user) => (
                <StyledTableRow
                  key={user._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {user.firstName}
                  </StyledTableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell>{user.salary + "$"}</TableCell>
                  <TableCell align={"center"}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => deleteEmployee(user._id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/employee/${user._id}`}>
                      <Button variant="outlined" color="secondary">
                        Details
                      </Button>
                    </Link>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <ModalEmployee
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setEmployeeData={setEmployeeData}
          />
        </TableContainer>
      )}
    </>
  );
};

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default EmployeeTable;

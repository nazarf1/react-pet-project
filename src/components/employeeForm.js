import React from "react";
import { TextField } from "@mui/material";

const EmployeeForm = ({ onChange, values }) => {
  return (
    <>
      <TextField
        id="outlined-search"
        label="First Name"
        name="firstName"
        value={values.firstName}
        onChange={onChange}
      />
      <br />
      <TextField
        id="outlined-search"
        label="Last Name"
        name="lastName"
        value={values.lastName}
        onChange={onChange}
      />
      <br />
      <TextField
        id="outlined-search"
        label="Email"
        name="email"
        value={values.email}
        onChange={onChange}
      />
      <br />
      <TextField
        id="outlined-search"
        label="Mobile number"
        name="phoneNumber"
        value={values.phoneNumber}
        onChange={onChange}
      />
      <br />
      <TextField
        id="outlined-search"
        label="Salary"
        name="salary"
        value={values.salary}
        onChange={onChange}
      />
    </>
  );
};

export default EmployeeForm;

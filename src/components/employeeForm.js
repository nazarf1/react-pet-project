import React from "react";
import { TextField } from "@mui/material";

const EmployeeForm = ({ onChange, values, errors, touched }) => {
  return (
    <>
      <TextField
        id="outlined-search"
        label="First Name"
        name="firstName"
        value={values.firstName}
        onChange={onChange}
        error={Boolean(errors.firstName) && touched.firstName}
        helperText={touched.firstName && errors.firstName}
      />
      <br />
      <TextField
        id="outlined-search"
        label="Last Name"
        name="lastName"
        value={values.lastName}
        onChange={onChange}
        error={Boolean(errors.lastName) && touched.lastName}
        helperText={touched.lastName && errors.lastName}
      />
      <br />
      <TextField
        id="outlined-search"
        label="Email"
        name="email"
        value={values.email}
        onChange={onChange}
        error={Boolean(errors.email) && touched.email}
        helperText={touched.email && errors.email}
      />
      <br />
      <TextField
        id="outlined-search"
        label="Mobile number"
        name="phoneNumber"
        value={values.phoneNumber}
        onChange={onChange}
        error={Boolean(errors.phoneNumber) && touched.phoneNumber}
        helperText={touched.phoneNumber && errors.phoneNumber}
      />
      <br />
      <TextField
        id="outlined-search"
        label="Salary"
        name="salary"
        onChange={onChange}
        value={values.salary}
        error={Boolean(errors.salary) && touched.salary}
        helperText={touched.salary && errors.salary}
      />
    </>
  );
};

export default EmployeeForm;

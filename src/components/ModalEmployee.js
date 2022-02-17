import React from "react";
import { get } from "lodash";
import axios from "axios";
import { Formik, Form } from "formik";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EmployeeForm from "./employeeForm";
import "./Modal.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -55%)",
};

const ModalEmployee = ({
  isOpen,
  setIsOpen,
  userInfo,
  setUserInfo,
  setEmployeeData,
}) => {
  const initValues = {
    firstName: get(userInfo, "firstName", ""),
    lastName: get(userInfo, "lastName", ""),
    email: get(userInfo, "email", ""),
    phoneNumber: get(userInfo, "phoneNumber", ""),
    salary: get(userInfo, "salary", ""),
  };

  function addEmployee(values) {
    axios
      .post(`https://friends-api-v1.herokuapp.com/api/v1/friends`, values)
      .then((res) => {
        setEmployeeData((prevState) => {
          return [...prevState, res.data.data.user];
        });
        setIsOpen(false);
        setUserInfo();
      });
  }
  function updateEmployee(data) {
    axios
      .patch(
        `https://friends-api-v1.herokuapp.com/api/v1/friends/${userInfo._id}`,
        data
      )
      .then((res) => {
        setEmployeeData((prevState) =>
          prevState.map((item) =>
            item._id === res.data.data.user._id ? res.data.data.user : item
          )
        );
        setIsOpen(false);
        setUserInfo();
      });
  }
  function handleCloseModal() {
    setIsOpen(false);
    setUserInfo();
  }

  return (
    <Modal open={isOpen}>
      <Box sx={style}>
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <h1>{userInfo ? "Update info" : "Add employee"}</h1>
            <button onClick={handleCloseModal}>X</button>
          </div>
          <Formik
            initialValues={initValues}
            onSubmit={(values) => {
              userInfo ? updateEmployee(values) : addEmployee(values);
            }}
          >
            {(formik) => {
              return (
                <Form
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <EmployeeForm
                    values={formik.values}
                    onChange={formik.handleChange}
                  />
                  <div className="footer" style={{ marginTop: "25px" }}>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </Button>
                    <Button variant="contained" type="submit" color="success">
                      {userInfo ? "Update" : "Add"}
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalEmployee;

import React, {useState} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./Modal.scss";
import {addEmployee, updateEmployee} from "../actions/employeeAction";
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../actions/modalActions";
import Form from "./Form"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -55%)',
};

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    salary: ''
}


const ModalEmployee = ({isOpen}) => {
    const isEdit = useSelector(state => state.modal.isEdit)
    const dispatch = useDispatch();
    function submitHandler() {
        dispatch(addEmployee(data));
    }
    function handleClose() {
        dispatch(closeModal())
        setData(initialValues)
    }
    const [data, setData] = useState(initialValues)
    const handleInputChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };


    return (
        <Modal open={isOpen}>
            <Box sx={style}>
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <h1>
                            Add employee
                        </h1>
                        <button
                            onClick={handleClose}
                        >
                            X
                        </button>
                    </div>
                    <Form handleInputChange={handleInputChange} data={data}/>
                    <div className="footer">
                        <Button
                            onClick={handleClose}
                            variant="outlined"
                            color="error"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={submitHandler}
                        >
                            Add
                        </Button>

                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default ModalEmployee
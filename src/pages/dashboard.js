import React from "react";
import Header from "../components/Header";
import EmployeeTable from "../components/EmployeeTable";
import ModalEmployee from "../components/ModalEmployee";
import {useSelector} from "react-redux";

const Dashboard = () => {
    const {isOpen} = useSelector(state => state.modal)

    return (
        <>
        <Header />
        <EmployeeTable />
        <ModalEmployee isOpen={isOpen} />
        </>
    )
}

export default Dashboard
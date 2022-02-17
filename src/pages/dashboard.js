import React, { useState } from "react";
import Header from "../components/Header";
import EmployeeTable from "../components/EmployeeTable";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <EmployeeTable setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default Dashboard;

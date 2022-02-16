import React from "react";
import {TextField} from "@mui/material";
import {useSelector} from "react-redux";


const Form = ({handleInputChange, data}) => {

    return (
        <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column'}}>
            <TextField id="outlined-search" label="First Name" name="firstName" value={data.firstName} onChange={handleInputChange}/>
            <br />
            <TextField id="outlined-search" label="Last Name" name="lastName" value={data.lastName} onChange={handleInputChange}/>
            <br />
            <TextField id="outlined-search" label="Email" name="email" value={data.email} onChange={handleInputChange}/>
            <br />
            <TextField id="outlined-search" label="Mobile number" name="phoneNumber" value= {data.phoneNumber} onChange={handleInputChange}/>
            <br />
            <TextField id="outlined-search" label="Salary" name="salary" value={data.salary} onChange={handleInputChange}/>
        </div>
    )
}

export default Form
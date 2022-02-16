import axios from "axios";
import {getData, deleteData} from "../api";
import {closeModal} from "./modalActions";

export const loadData = () => async (dispatch) => {
    dispatch ({
        type: "LOADING"
    })

    const employeeData = await axios.get(getData());

    dispatch({
        type: "FETCH_DATA",
        payload: {
            employee: employeeData.data.data.users,
        }
    })
}

export const deleteUser = (id) => async (dispatch) => {
    axios
        .delete(deleteData(id))
        .then(() => {
            dispatch(loadData())
        })
}

export const addEmployee = (data) => async (dispatch) => {
    axios
        .post('https://friends-api-v1.herokuapp.com/api/v1/friends', data)
        .then(() => {
            dispatch(loadData())
            dispatch(closeModal())
        })
}

export const updateEmployee = (data, id) => async (dispatch) => {
    axios
        .patch(`https://friends-api-v1.herokuapp.com/api/v1/friends/${id}`, data)
        .then(() => {
            dispatch(loadData())
            dispatch(closeModal())
        })
}

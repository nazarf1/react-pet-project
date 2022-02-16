export const getData = () => 'https://friends-api-v1.herokuapp.com/api/v1/friends';

export const deleteData = (id) => (`https://friends-api-v1.herokuapp.com/api/v1/friends/${id}`);

export const createEmployee = (data) => (`https://friends-api-v1.herokuapp.com/api/v1/friends`, data);


import axios from 'axios';

// axios.defaults.headers.get['Content-Type'] = 'application/json';

const server = "https://script.google.com/macros/s/AKfycbxSutYsIkTzy1iPCxNR4UNyu3KfdxnWkTiW9Hv9qv_aoOPYCvmK76fQnxVPS7BROqfmaA/exec?";

export const updateData = (param) => axios.post(server + param).then(res => res.data.message);

export const getData = (param) => axios.get(server + param).then(res => res.data);

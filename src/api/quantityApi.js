import axios from "axios";

const BASE = "http://localhost:8080/api/quantity";

export const apiConvert   = (data) => axios.post(`${BASE}/convert`, data);
export const apiCompare   = (data) => axios.post(`${BASE}/compare`, data);
export const apiAdd       = (data) => axios.post(`${BASE}/add`, data);
export const apiSubtract  = (data) => axios.post(`${BASE}/subtract`, data);
export const apiDivide    = (data) => axios.post(`${BASE}/divide`, data);
export const apiGetAll    = ()     => axios.get(`${BASE}/all`);
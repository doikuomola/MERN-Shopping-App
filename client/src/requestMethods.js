// @ts-nocheck
import axios from 'axios'

const BASE_URL = "http://localhost:9989/"
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjczNzNmOWUzZTVmYjg2MWRmNTllYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTU4Mjg5MCwiZXhwIjoxNjM5ODQyMDkwfQ.3WCcUPDWpaQFHR4GK3Cr8oZzidc7gibTezSOogVAwmE"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}`}
});
import axios from "axios";

const API_URL = "https://ewaste-dec20-dev-api.azurewebsites.net/reps/";

async function getAllUsers() {
  const { data: users } = await axios.get(API_URL);
  return users;
}

async function registerUsers(userData) {
  const { data: users } = await axios.post(`${API_URL}add`, userData);
  return users;
}
async function loginUser(loginData) {
  const { data: login } = await axios.post(`${API_URL}login`, {
    email: loginData.email,
    password: loginData.password,
  });
  return login;
}
async function updateReprProfile(updated, token) {
  await axios.put(`${API_URL}/${token}`, updated);
}
async function logoutUser() {
  await axios.get(`${API_URL}logout`);
}
async function fetchUserId(token) {
  const { data: id } = await axios.post(`${API_URL}getId`, token);
  return id;
}
async function fetchRepId(token) {
  const  response= await axios.post(`${API_URL}getId`, token);
  return response._id;
}
async function fetchReprData(token) {
  const { data: repr } = await axios.get(`${API_URL}/${token}`);
  return repr;
}

export default {
  getAllUsers,
  registerUsers,
  loginUser,
  logoutUser,
  API_URL,
  fetchUserId,
  fetchReprData,
  updateReprProfile,
};

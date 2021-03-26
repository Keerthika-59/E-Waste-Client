import axios from "axios";
const API_URL = "https://ewaste-dec20-dev-api.azurewebsites.net/auth1/";

async function getAllUsers() {
  const { data: users } = await axios.get(API_URL);
  return users;
}

async function registerUsers(userData) {
  const { data: users } = await axios.post(`${API_URL}signup`, userData);
  return users;
}

async function loginUser(loginData) {
  const { data: login } = await axios.post(`${API_URL}login`, {
    email: loginData.email,
    password: loginData.password,
  });
  return login;
}
async function updateUserProfile(updated,token) {
  await axios.put(`${API_URL}user/${token}`, updated);
}

async function logoutUser() {
  await axios.get(`${API_URL}logout`);
}
async function fetchUserId(token) {
  const { data: id } = await axios.post(`${API_URL}getId`, token);
  return id;
}
async function fetchUserData(token) {
 const {data:user}= await axios.get(`${API_URL}/user/${token}`);
 return user
}
export default {
  getAllUsers,
  registerUsers,
  loginUser,
  logoutUser,
  API_URL,
  fetchUserId,
  fetchUserData,
  updateUserProfile
};

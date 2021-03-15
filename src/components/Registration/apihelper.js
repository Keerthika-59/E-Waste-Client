import axios from "axios"

const API_URL = "https://ewaste-dec20-dev-api.azurewebsites.net/auth1/"

async function getAllUsers() {
    const { data: users } = await axios.get(API_URL)
    return users
}

async function registerUsers(userData) {
    const { data: users } = await axios.post(`${API_URL}signup`,userData)
    return users
  }

  async function loginUser(loginData){
    const { data: login } = await axios.post(`${API_URL}login`,{
        email:loginData.email,
        password:loginData.password
    })
    return login
  }
async function logoutUser(){
    await axios.get(`${API_URL}logout`)
}

  export default  {getAllUsers,registerUsers,loginUser,logoutUser}
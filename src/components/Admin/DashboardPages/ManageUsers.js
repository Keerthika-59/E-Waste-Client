import React, { useState, useEffect } from 'react'
import APIHelper from '../../API/apihelper'
import { Card,Table,Button } from 'react-bootstrap'

const ManageUsers = () => {

    const [users, setUsers] = useState([{
        name: "",
        phoneNumber: "",
        email: "",
        gender: "",
        password: "",
        city: "",
        address: ""
    }]);

    useEffect(() => {
        fetch(`${APIHelper.API_URL}`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setUsers(jsonRes))
    },[])

    function removeUser(email){
        alert(`removed ${email}`)
    }
    // console.log(`users ${users}`)
    return (
        <>
         <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>E-mail</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {users.map(user =>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.email}</td>
                        <td>{user.city}</td>
                        <td>{user.address}</td>
                        {/* <td><Button style={{backgroundColor:"red",margin:"10px"}}>DELETE</Button></td>     */}
                        {/* {this.removeToCollection(key, e)} */}
                        <td> <Button variant="danger"  onClick={() => {if(window.confirm('Do you want to delete the user?')){removeUser(user.email)};}}>DELETE</Button></td>
                        
                    </tr>)}
                   
                </tbody>
            </Table>
        </>
    )
}


export default ManageUsers

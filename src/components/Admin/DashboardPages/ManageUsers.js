import React, { useState, useEffect } from 'react'
import APIHelper from '../../API/apihelper'
import { Card,Table,Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
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
                        <td> <Button variant="danger"  onClick={() => {
                        
                                Swal.fire({
                                    title: 'Are you sure?',
                                    text: 'You will not be able to recover this User Details!',
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonText: 'Yes, delete it!',
                                    cancelButtonText: 'No, keep it'
                                  }).then((result) => {
                                    if (result.value) {
                                      Swal.fire(
                                        'Deleted!',
                                        'The User details has been deleted.',
                                        'success'
                                      )
                                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                                      Swal.fire(
                                        'Cancelled',
                                        'The User details is not deleted :)',
                                        'error'
                                      )
                                    }
                                  })
                        
                            
                        }}>DELETE</Button></td>
                        
                    </tr>)}
                   
                </tbody>
            </Table>
        </>
    )
}


export default ManageUsers

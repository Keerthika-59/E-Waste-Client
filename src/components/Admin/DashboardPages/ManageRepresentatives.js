import React, { useState, useEffect } from 'react'
import APIHelper from '../../API/apihelper2'
import { Card,Table,Button } from 'react-bootstrap'

const ManageRepresentatives = () => {

    const [Reps, setReps] = useState([{
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
        }).then(jsonRes => setReps(jsonRes))
    },[])
    // console.log(`Reps ${Reps}`)
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
                {Reps.map(Rep =>
                    <tr>
                        <td>{Rep.id}</td>
                        <td>{Rep.name}</td>
                        <td>{Rep.phoneNumber}</td>
                        <td>{Rep.email}</td>
                        <td>{Rep.city}</td>
                        <td>{Rep.address}</td>
                        {/* <td><Button style={{backgroundColor:"red",margin:"10px"}}>DELETE</Button></td>     */}
                        {/* {this.removeToCollection(key, e)} */}
                        <td> <Button variant="danger"  onClick={() => {if(window.confirm('Do you want to delete the Representative?'))alert("Representative Deleted");}}>DELETE</Button></td>

                    </tr>)}
                   
                </tbody>
            </Table>
        </>
    )
}


export default ManageRepresentatives

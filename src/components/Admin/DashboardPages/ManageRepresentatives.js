import React, { useState, useEffect } from 'react'
import APIHelper from '../../API/apihelper2'
import { Card, Table, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

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
    }, [])
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
                            <td> <Button variant="danger" onClick={() => {

                                Swal.fire({
                                    title: 'Are you sure?',
                                    text: 'You will not be able to recover this Representative Details!',
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonText: 'Yes, delete it!',
                                    cancelButtonText: 'No, keep it'
                                }).then((result) => {
                                    if (result.value) {
                                        Swal.fire(
                                            'Deleted!',
                                            'The Representative details has been deleted.',
                                            'success'
                                        )
                                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                                        Swal.fire(
                                            'Cancelled',
                                            'The Representative details is not deleted :)',
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


export default ManageRepresentatives

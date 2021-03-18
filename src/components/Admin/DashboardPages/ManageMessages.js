import React, { useState, useEffect } from 'react'
import APIHelper from '../../API/apihelper'
import { Card, Table, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

const ManageMessages = () => {

    const [Messages, setMessages] = useState([{
        name: "",
        email: "",
        message: ""
    }]);

    useEffect(() => {
        fetch(`https://ewaste-dec20-dev-api.azurewebsites.net/contacts`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setMessages(jsonRes))
    }, [])

    function removeMessage(email) {
        alert(`removed ${email}`)
    }
    // console.log(`Messages ${Messages}`)
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Messages.map(Message =>
                        <tr>
                            <td>{Message.id}</td>
                            <td>{Message.name}</td>
                            <td>{Message.email}</td>
                            <td>{Message.message}</td>
                            <td> <Button variant="danger" onClick={() => {

                                Swal.fire({
                                    title: 'Are you sure?',
                                    text: 'You will not be able to recover this Message Details!',
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonText: 'Yes, delete it!',
                                    cancelButtonText: 'No, keep it'
                                }).then((result) => {
                                    if (result.value) {
                                        Swal.fire(
                                            'Deleted!',
                                            'The Message has been deleted.',
                                            'success'
                                        )
                                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                                        Swal.fire(
                                            'Cancelled',
                                            'The Message is not deleted :)',
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


export default ManageMessages

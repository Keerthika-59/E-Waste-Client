import React, { useState, useEffect } from 'react';
import { Card,Table,Button } from 'react-bootstrap';

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
    },[])

    function removeMessage(email){
        alert(`removed ${email}`)
    }
    
    // console.log(`Messages ${Messages}`)
    return (
        <>
         <Table striped bordered hover className = "text-center">
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
                        {/* <td><Button style={{backgroundColor:"red",margin:"10px"}}>DELETE</Button></td>     */}
                        {/* {this.removeToCollection(key, e)} */}
                        <td> <Button variant="danger"  onClick={() => {if(window.confirm('Do you want to delete the Message?')){removeMessage(Message.email)};}}>DELETE</Button></td>

                    </tr>)}
                   
                </tbody>
            </Table>
        </>
    )
}


export default ManageMessages

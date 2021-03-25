import React, { useEffect, useState, useMemo } from "react";
// import Header from "./Header";
import { TableHeader, Pagination, Search } from "./DashboardPages/Tablecomponent";
import useFullPageLoader from "./DashboardPages/useFullPageLoader";
// import AppConfig from "App.config";
import Swal from 'sweetalert2'
import { Button,Table } from 'react-bootstrap'
import axios from 'axios'

const TableMessages = () => {
    const [comments, setComments] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 15;

    const headers = [
        { name: "Name", field: "name", sortable: true },
        { name: "Email", field: "email", sortable: true },
        { name: "Message", field: "message", sortable: true },
        { name: "Time", field: "time", sortable: false }

    ];

    const url = 'http://ewaste-dec20-dev-api.azurewebsites.net/'

    useEffect(() => {
        const getData = () => {
            showLoader();

            fetch('http://ewaste-dec20-dev-api.azurewebsites.net/contacts')
                .then(response => response.json())
                .then(json => {
                    hideLoader();
                    setComments(json);
                });
        };

        getData();
    }, [comments]);

    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                comment =>
                    comment.name.toLowerCase().includes(search.toLowerCase()) ||
                    comment.email.toLowerCase().includes(search.toLowerCase()) ||
                    comment.createdAt.toLowerCase().includes(search.toLocaleLowerCase())
            );
        }

        setTotalItems(computedComments.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage, search, sorting]);

    return (
        <>
            {/* <ExternalInfo page="datatable" /> */}

            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                    </div>
                    {/* <div className="col-md-6 d-flex flex-row-reverse" style={{ marginLeft: "400px" }}> */}
                    <Search
                        onSearch={value => {
                            setSearch(value);
                            setCurrentPage(1);
                        }}
                    />
                    {/* </div> */}
                    <h4>Messages</h4>

                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commentsData.map(comment => (
                                <tr>
                                    <td>{comment.name}</td>
                                    <td>{comment.email}</td>
                                    <td>{comment.message}</td>
                                    <td>   <Button variant="danger" onClick={() => {

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
                                                    // 'success'
                                                )
                                                axios.delete(`${url}/admin/user/${comment._id}`)
                                            } else if (result.dismiss === Swal.DismissReason.cancel) {
                                                Swal.fire(
                                                    'Cancelled',
                                                    'The User details is not deleted :)',
                                                    // 'error'
                                                )
                                            }
                                        })


                                    }}>DELETE</Button> </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default TableMessages;

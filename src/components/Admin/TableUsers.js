import React, { useEffect, useState, useMemo } from "react";
// import Header from "./Header";
import APIHelper from '../API/apihelper'
import { TableHeader, Pagination, Search } from "./DashboardPages/Tablecomponent";
import useFullPageLoader from "./DashboardPages/useFullPageLoader";
// import AppConfig from "App.config";
import Swal from 'sweetalert2'
import {Button} from 'react-bootstrap'

const TableUsers = () => {
    const [users, setUsers] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 9;

    const headers = [
        { name: "No#", field: "id", sortable: false },
        { name: "Name", field: "name", sortable: true },
        { name: "Email", field: "email", sortable: true },
        { name: "Phone Number", field: "body", sortable: false },
        { name: "City", field: "city", sortable: true },
        { name: "Address", field: "address", sortable: true },
        { name: "Action", field: "body", sortable: false }
    ];

    useEffect(() => {
        const getData = () => {
            showLoader();

            fetch(`${APIHelper.API_URL}`)
                .then(response => response.json())
                .then(json => {
                    hideLoader();
                    setUsers(json);
                });
        };

        getData();
    }, []);

    const usersData = useMemo(() => {
        let computedComments = users;

        if (search) {
            computedComments = computedComments.filter(
                user =>
                    user.name.toLowerCase().includes(search.toLowerCase()) ||
                    user.email.toLowerCase().includes(search.toLowerCase())
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
    }, [users, currentPage, search, sorting]);

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
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <Search
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>

                    <table className="table table-striped">
                        <TableHeader
                            headers={headers}
                            onSorting={(field, order) =>
                                setSorting({ field, order })
                            }
                        />
                        <tbody>
                            {usersData.map(user => (
                                <tr>
                                    <th scope="row" key={user.id}>
                                        {user.id}
                                    </th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.city}</td>
                                    <td>{user.address}</td>
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
                    </table>
                </div>
            </div>
            {loader}
        </>
    );
};

export default TableUsers;

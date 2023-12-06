// import { useQuery } from '@tanstack/react-query';
// import React from 'react';

// const AllUsers = () => {

//     const { data: users = [], refetch } = useQuery(['users'], async () => {
//         const res = await fetch('http://localhost:5000/users');
//         return res.json();
//     })

//     return (
//         <div>
//             {users.length}
//         </div>
//     );
// };

// export default AllUsers;

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {

    // const [axiosSecure] = useAxiosSecure() // for using [] not working
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            // return res.json();
            return res.data;
        },
    });

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }

    const handleDelete = user => {

    }

    return (
        <div className='w-5/6'>
            <Helmet>
                <title>Bistro boss | All Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Role</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role == 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-orange-400 text-white"><FaUserShield></FaUserShield></button>


                                }</td>

                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost btn-sm bg-red-400 text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaUsers, FaBook } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';
const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full  text-base-content">

                    {
                        isAdmin ? <>
                            {/* Sidebar content here */}
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet>Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>All Users</NavLink></li>
                            

                        </> : <>
                            {/* Sidebar content here */}
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                </NavLink>

                            </li>
                        </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
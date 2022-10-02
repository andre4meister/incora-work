import {NavLink} from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return (
        <ul className='nav-pills navbar-dark flex-column col-2 h-100'>
            <li className='nav-item'>
                <NavLink className='nav-link px-2' aria-current='page' to='task1'>
                    Task 1
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className='nav-link px-2' to='/task2'>
                    Task 2
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className='nav-link px-2' to='settings'>
                    Settings
                </NavLink>
            </li>
        </ul>
    );
};

export default Navbar;

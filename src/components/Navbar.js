/*
File Name: Navbar.js
Student's Name: Mohammed Sadiq Ahamed Kadar
Student ID: 301 430 160
Date: 09-17-2024
*/

// Importing needed libraries //
import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

// Main //
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
               <img src="logo.jpg" alt="logo" style={{width: '100px', height: 'auto'}}></img>
            </div>

            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav> 
    );
};

export default Navbar;

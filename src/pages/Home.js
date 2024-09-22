/*
File Name: Home.js
Student's Name: Mohammed Sadiq Ahamed Kadar
Student ID: 301 430 160
Date: 09-17-2024
*/

// Importing needed libraries //
import React from 'react';
import {Link} from 'react-router-dom';

// Main //
const Home = () => {
    return (
        <div className="container"> 
            <h1>Welcome to Mohammed's Portfolio</h1>
            <p>My mission statement is to help build up-to-date web applications.</p>
            <Link to="/about">Click here to learn more about me</Link>
        </div>

    );
};

export default Home;
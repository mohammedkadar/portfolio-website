/*
File Name: Services.js
Student's Name: Mohammed Sadiq Ahamed Kadar
Student ID: 301 430 160
Date: 09-17-2024
*/

// Importing needed libraries //
import React from 'react';

// Main //
const Services = () => {
    return(
        <div className="container">
            <h1>Services</h1>
            <div>
                <img src={`${process.env.PUBLIC_URL}/webappdevelop.png`}alt="Web" style={{width: '500px', height: 'auto'}} />
                <p>Web Application Development</p>
                </div>
                <div>
                <img src={`${process.env.PUBLIC_URL}/srsdocumenting.jpg`} alt="SRS" style={{width: '500px', height: 'auto'}} />
                <p>Software Requirements Specifications Documenting</p>
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/databasemanaging.jpg`} alt="Database" style={{width: '500px', height: 'auto'}} />
                <p>Managing Databases</p>
            </div>
        </div>
    );
};


export default Services
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
                <img src="/webappdevelop.png" alt="Web Application Development" style={{width: '500px', height: 'auto'}} />
                <p>Web Application Development</p>
                <div>
                <img src="/srsdocumenting.jpg" alt="SRS Documenting" style={{width: '500px', height: 'auto'}} />
                <p>Software Requirements Specifications Documenting</p>
            </div>
            <div>
                <img src="/databasemanaging.jpg" alt="Database Managing" style={{width: '500px', height: 'auto'}} />
                <p>Managing Databases</p>
            </div>
        </div>
        </div>
    );
};


export default Services
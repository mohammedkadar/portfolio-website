/*
File Name: Projects.js
Student's Name: Mohammed Sadiq Ahamed Kadar
Student ID: 301 430 160
Date: 09-17-2024
*/

// Importing needed libraries //
import React from "react";

// Main //
const Projects = () =>{
    return (
        <div className="container">
            <h1>Projects</h1>
            <div>
                <img src="/project1.png" alt="Project 1" style={{width: '500px', height: 'auto'}} />
                <p>Project 1: I developed a weather web app that can provide real-time forecasts and alerts. <br></br> The outcome is that users can access accurate weather information easily, enabling better planning and awareness of local conditions.</p>
            </div>
            <div>
                <img src="/project2.jpg" alt="Project 2" style={{width: '500px', height: 'auto'}} />
                <p>Project 2: I created a Tic Tac Toe web application that allows users to play against each other or an AI. <br></br>The outcome of this app is to make users enjoy a simple, interactive game that improves their strategic thinking and offers a fun way to pass the time.</p>
            </div>
            <div>
                <img src="/project3.png" alt="Project 3" style={{width: '500px', height: 'auto'}} />
                <p>Project 3: Me and my team of 3 dveloped a To-Do List web application that helps users organize and manage their tasks. <br></br>The outcome was for users to easily add, edit, and priortize tasks, improving productivity and ensuring they stay on track with their goals.</p>
            </div>
        </div>
    );
};

export default Projects
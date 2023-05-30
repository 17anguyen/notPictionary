import React from 'react';
import Project from '../Project';
import eventGif from '../../Assets/images/eventplan.gif'
import chinguGif from '../../Assets/images/chingu.gif'
import portfolioGif from '../../Assets/images/portfolio1.gif'
import obfGif from '../../Assets/images/obf.gif'



export default function Portfolio() {
    const projects = [
        {
            id: 1,
            name: "Event Planner - Group Project 1",
            description: "This was build utilizing google maps and calendar functions to push through events and locations to selected attendees and store incremental details locally",
            deployed: "https://17anguyen.github.io/event-planner/",
            github: "https://github.com/17anguyen/event-planner",
            display: eventGif


        },
        {
            id: 2,
            name: "Chingu Talk - Group Project 2",
            description: "This app utilizes Socket.Io and Cloudinary creating a SQL based social networking app with an open chat and matching users based on interests",
            deployed: "https://chingutalk.herokuapp.com/",
            github: "https://github.com/mercurybased/buddy-system",
            display: chinguGif


        },
        {
            id: 3,
            name: "First Portfolio",
            description: "My first portfolio project design",
            deployed: "https://17anguyen.github.io/Portfolio-Project/",
            github: "https://github.com/17anguyen/Portfolio-Project/blob/main/README.md",
            display: portfolioGif

        },
        {
            id: 4,
            name: "One By Faith",
            description: "A commission design for an e-commerce and scheduling site",
            github: "https://github.com/17anguyen",
            deployed: "https://www.onebyfaith.co/",
            display: obfGif

        },

    ]
    return (
        <Project projects={projects} />
    );
}
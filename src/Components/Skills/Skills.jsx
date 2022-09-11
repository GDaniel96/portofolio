import React from "react";
import HTML from '../../Images/html.png'
import CSS from '../../Images/css-3.png'
import Bootstrap from '../../Images/bootstrap.png'
import Javascript from '../../Images/js.png'
import ReactFramework from '../../Images/react.png'
import JsGame from '../../Images/Js-Game.jpg'
import Weather from '../../Images/Weather1.png'
import './Skills.css'
import Skill from "./Skill";

const Skills = () => {

    return (
        <div className='mainContainer'>
            <h1> Projects </h1>
            <div className='projects'>
                <div className='projectContainer'>
                    <img src={JsGame}></img>
                    <h2>Rock, Papper, Scissors game</h2>
                    <p>This is a Rock, Papper, Scissors game made in Javascript. </p>
                    <a href="https://github.com/GDaniel96/Homework/tree/main/Rock%2C%20Paper%2C%20Scissors%20DOM" target="_blank">Github</a>
                </div>
                <div className='projectContainer'>
                    <img src={Weather}></img>
                    <h2>Weather application </h2>
                    <p>Here is a weather application made with Javascript OOP that makes a call to the API https://openweathermap.org/</p>
                    <a href="https://github.com/GDaniel96/Homework/tree/master" target="_blank">Github</a>
                </div>
            </div>
            <h1>Skills</h1>
            <div className='skillsContainer'>
                <Skill src={HTML} value="70%" color="#ff6f3c" />
                <Skill src={CSS} value="70%" color="#2196F3" />
                <Skill src={Bootstrap} value="50%" color="#6643b5" />
                <Skill src={Javascript} value="50%" color="#eec60a" />
                <Skill src={ReactFramework} value="60%" color="#00bbf0" />
            </div>
        </div>
    )
}
export default Skills;
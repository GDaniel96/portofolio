import React from "react";
import Photo from '../../Images/image.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='homepage-main'>
            <div className='description'>
                <h1>Hi, my name is Daniel</h1>
                <p>I'm 26 years old and currently I am in the process of becoming a Front-End Developer. The passion for the technology field started at a young age by playing videos games and trying to be up to date with everything new on the market.
                I am a type of person that likes to work in a team, this being a method to learn from others.</p>
            </div>
            <div className='photo'>
                <img src={Photo}></img>
            </div>
        </div>
    )
}

export default Home;
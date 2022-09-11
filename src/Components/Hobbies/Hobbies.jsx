import React from "react";
import KendamaPhoto from '../../Images/kendama1.jpg'
import KendamaPhoto2 from '../../Images/kendama2.jpg'
import KendamaPhoto3 from '../../Images/kendama3.png'
import KendamaPhoto4 from '../../Images/kendama4.jpg'
import KendamaPhoto5 from '../../Images/kendama5.jpg'
import KendamaPhoto6 from '../../Images/youtube-logo-png-2072.png'
import MusicPhoto from '../../Images/music1.png'
import MusicPhoto2 from '../../Images/music2.png'
import MusicPhoto3 from '../../Images/cover-sanek.png'
import MusicPhoto4 from '../../Images/trippy.jpg'
import MusicPhoto5 from '../../Images/rsz_sanek_final.jpg'
import MusicPhoto6 from '../../Images/mixcloud.png'
import './Hobbies.css'

const Hobbies = () => {

    return (
        <div className='hobbiesContainer'>
            <h1> Here are some of my hobbies</h1>
            <h2>Kendama is one of them:</h2>
            <div className="kendama">
                <img src={KendamaPhoto}></img>
                <img src={KendamaPhoto2}></img>
                <img src={KendamaPhoto3}></img>
                <img src={KendamaPhoto4}></img>
                <img src={KendamaPhoto5}></img>
                <a href="https://www.youtube.com/user/Sanekcrew/videos" target="_blank">
                    <img src={KendamaPhoto6}></img>
                </a>
            </div>
            <h2>Music is the second:</h2>
            <div className="music">
                <img src={MusicPhoto}></img>
                <img src={MusicPhoto2}></img>
                <img src={MusicPhoto3}></img>
                <img src={MusicPhoto4}></img>
                <img src={MusicPhoto5}></img>
                <a href="https://www.mixcloud.com/Saneku/" target="_blank">
                    <img src={MusicPhoto6}></img>
                </a>
            </div>
            <br></br>
        </div >
    )
}

export default Hobbies;
import React, { Children, useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTerminal, faBriefcase, faIcons, faEnvelope, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './Layout.css'


const Layout = (props) => {
    const [lightModeActive, setLightModeActive] = useState(false)

    console.log(lightModeActive);
    const toggleColor = () => {
        setLightModeActive(!lightModeActive)
    }

    useEffect(() => {
        if (lightModeActive) {
            document.body.classList.add('light-mode');
        }
        else {
            document.body.classList.remove('light-mode');
        }
    }, [lightModeActive])

    return (
        <div className="layout">
            <header>
                <nav>
                    <Link to='/'> <FontAwesomeIcon icon={faHome} size='lg' transform='grow-4 right-2 down-2'/></Link>
                    <Link to='/Skills'><FontAwesomeIcon icon={faTerminal} size='lg' transform='grow-4 right-2 down-2'/></Link>
                    <Link to='/Experience'><FontAwesomeIcon icon={faBriefcase} size='lg' transform='grow-4 right-3.5 down-2'/></Link>
                    <Link to='/Hobbies'><FontAwesomeIcon icon={faIcons} size='lg' transform='grow-4 right-2 down-2'/></Link>
                    <Link to='/Contact-Form'><FontAwesomeIcon icon={faEnvelope} size='lg' transform='grow-4 right-3.5 down-2'/></Link>
                    <button onClick={toggleColor} className='theme'><FontAwesomeIcon icon={lightModeActive ? faSun : faMoon} transform='down-1' /></button>
                </nav>
            </header>
            <main className='app-content'>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;
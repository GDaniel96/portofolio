import Accordion from 'react-bootstrap/Accordion'
import OracleIcon from '../../Images/oracle.png'
import AWSIcon from '../../Images/aws2.png'
import StefaniniIcon from '../../Images/stefanini1.png'
import GenpactIcon from '../../Images/genpact3.png'
import CCCIcon from '../../Images/ccc1.png'
import React from "react";
import './Experience.css';

const Experience = () => {

    return (
        <Accordion >
            <h1> Work Experience</h1>
            <Accordion.Item eventKey='0'>
                <Accordion.Header><img src={OracleIcon}></img>Database Advanced Support Engineer - ACS Global Delivery (Nov 2021 - Apr 2022)</Accordion.Header>
                <Accordion.Body>
                    Provide technical support and act as a DBA for major clients, this including performance and configuration reports for the client's databases.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
                <Accordion.Header><img src={AWSIcon}></img> Level 2 Information Technology Support Engineer (Apr 2021 - Oct 2021)</Accordion.Header>
                <Accordion.Body>
                    As a L2 IT Support Engineer at Amazon Web Services I had the below responsibilities:<br></br>
                    Provide complete technical support to Amazon's accompanying employees worldwide.<br></br>
                    Research, solve and answer questions received through web chat, phone calls, e-mail, ticketing system, all in a timely manner, under standard conditions.<br></br>
                    Diagnose and extend the end-use computing problems, including problem analysis, identifying appropriate resources, testing the correction, and monitoring for problem-solving.<br></br>
                    Create and send call logs to provide care information documents that can be correlated, thorough and timely.<br></br>
                    Organise user training sessions, corresponding to new technological solutions.<br></br>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
                <Accordion.Header><img src={GenpactIcon}></img>IT Support - Senior Process Associate (Jun 2019 - Apr 2021)</Accordion.Header>
                <Accordion.Body>
                    As a Senior Process Associate for IT support I had the below responsibilities:<br></br>
                    Being the single point of contact for IT matter for the client.<br></br>
                    Providing support for user requests around hardware, software, network and service issues.<br></br>
                    Coordinating incident resolution with Level 2 and Level 3 staff.<br></br>
                    Logging and keeping record of user queries.<br></br>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='3'>
                <Accordion.Header><img src={StefaniniIcon}></img> SR User Supprt Consultant (May 2017 - May 2019)</Accordion.Header>
                <Accordion.Body>
                    As a User Support Consultant l had the chance of working in one of the most dynamic areas and tackle the issue of complicated payments for the travel industry by becoming an expert in the payment solutions through extensive training programs;<br></br>
                    My daily interaction was with travel agencies and airlines companies around the world;<br></br>
                    I had to diagnose, troubleshoot and solve issues related to the applications the clients use through incoming phone calls and e-mails;<br></br>
                    VANs (virtual account numbers), currencies, financial institutions, Mastercard - all these will become your daily “tools”;<br></br>
                    I was part of the eNett Helpdesk Team - a global, broad-based business services provider that serves companies in every segment of the travel industry.<br></br>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='4'>
                <Accordion.Header><img src={CCCIcon}></img> Customer Service Agent (Nov 2015 - Dec 2015)</Accordion.Header>
                <Accordion.Body>
                    Providing chat / written support (flight reservations, cancellations, general flight information, etc.) for airline customers.
                </Accordion.Body>
            </Accordion.Item>
            <h1>Education</h1>
            <div className='educationContainer'>
                <div>
                    <h2>Scoala informala de IT. Web Development (JavaScript) (May 2022 - Sep 2022)</h2>
                    <p>Taking part of a 5 month FrontEnd Development course in which we are studying and practising the web development technologies like HTML5, CSS3, JavaScript, Bootstrap and React. After finishing the course we will have a portfolio project in which we will use the knowledge accumulated during the course.</p>
                </div>
                <div>
                    <h2>Liceul Teoretic Constantin Noica (2011 - 2015)</h2>
                </div>
                <br></br>

            </div>
        </Accordion>

    )
}

export default Experience;
import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LinkedIn from '../../Images/linkedin.png'
import Github from '../../Images/github.png'
import Facebook from '../../Images/facebook.png'
import Instagram from '../../Images/instagram.png'
import Mixcloud from '../../Images/mixcloudContact.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser'
import './Contact.css';
import { useRef } from 'react';

const Contact = () => {

    const form = useRef();

    const submitForm = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ivy7vl8', 'template_43oc1rf', e.target, 'FqFKcxTOr8y3MQDz5')
            .then((result) => {
                console.log(result.text);
                alert('Thank for sending a message')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="contactContainer">
            <h1>Get in touch with me here:</h1>
            <Form ref={form} onSubmit={submitForm}>
                <Form.Group className='m-3' controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" name='from_email' required />
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Leave your message here.." name='message' />
                </Form.Group>
                <Button className="m-3" variant="primary" type="submit" value='Send' >Submit</Button>
            </Form>
            <div className="contactIcons">
                <a href='https://www.linkedin.com/in/caciulita-george-daniel-59211b158' target="_blank">
                    <img src={LinkedIn}></img>
                </a>
                <a href='https://github.com/GDaniel96' target="_blank">
                    <img src={Github}></img>
                </a>
                <a href='https://www.facebook.com/sanek.kendama/' target="_blank">
                    <img src={Facebook}></img>
                </a>
                <a href='https://www.instagram.com/danielcucapulchel/' target="_blank">
                    <img src={Instagram}></img>
                </a>
                <a href='https://www.mixcloud.com/Saneku/' target="_blank">
                    <img src={Mixcloud}></img>
                </a>
                <a href='/Profile.pdf' target="_blank">
                    <FontAwesomeIcon icon={faFile} size="2xl"></FontAwesomeIcon>
                </a>
            </div>

            <div className='contactDetails'>
                <div>
                    <FontAwesomeIcon icon={faPhone} transform="grow-4 left-6 up-3" />
                    <span>0752844003</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} transform="grow-4 left-6" />
                    <span>george.daniel1996@yahoo.com</span>
                </div>
            </div>
        </div>
    )
}

export default Contact
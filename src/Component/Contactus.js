import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../StyleMain/Stylewa.css';

const Contactus = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qqlgky9', 'template_7093bhh', form.current, 'JncqrqZw4IsMClkfs')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            alert('Email sent successfully!');
        }, (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send email.');
        });
    };

    return (
        <section id="contact">
            <form ref={form} onSubmit={sendEmail}>
                <h1>Our Contact</h1>
                <div className="contact-row">
                    <div className="contact-col">
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <textarea cols="30" rows="10" placeholder="Enter Message" name="message" required></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="Enter your name" name="name" required/>
                                    </td>
                                    <td>
                                        <input type="email" placeholder="Email" name="email" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="text" placeholder="Enter Subject" name="subject" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="submit" value="Send" className="send-btn"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="contact-col">
                        <div className="contact-details">
                            <i className="fa fa-home"></i>
                            <div className="contact-address">
                                <h4>Buttonwood, California.</h4>
                                <span>Rosemead, CA 91770</span>
                            </div>
                        </div>

                        <div className="contact-details">
                            <i className="fa fa-phone"></i>
                            <div className="contact-address">
                                <h4>Buttonwood, California.</h4>
                                <span>PUNE, SWARGATE 91770</span>
                            </div>
                        </div>

                        <div className="contact-details">
                            <i className="fa fa-envelope"></i>
                            <div className="contact-address">
                                <h4>TimeZone@gmail.com</h4>
                                <span>Send us your query anytime!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Contactus;

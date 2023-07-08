import React, { useState, useRef } from 'react';

import emailjs from '@emailjs/browser';
// import dotenv from 'dotenv'

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import ReactTooltip from 'react-tooltip';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

//emailjs
const form = useRef();
// dotenv.config()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm("service_d005wb5", "template_3nz1bjm", form.current, "Sh5lobfjRQxguwZ6F")
    .then((result) => {
        console.log(result.text);
        console.log("message sent")
    }, (error) => {
        console.log(error.text);
    });
};



  return (
    <>
      <h2 className="head-text">How To<span> Get In Touch</span> With Me</h2>

      <div className="app__footer-cards">
        <><div className="app__footer-card"
        data-tip="Click to send me an email, or use the form below if you'd rather">
          <img src={images.email} alt="email" />
          <a href="mailto:greenjoe071@gmail.com" className="p-text">Click to send me an e-mail<br></br> or use the form below</a>

          <ReactTooltip
                data-type ="success"
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
              </ReactTooltip> 
        </div></>
      
        <div className="app__footer-card">
          <img src={images.resume} />
          <a href={images.downloadResume} className="p-text" download>Download My Resume</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
        ref={form}
        onSubmit={sendEmail} 
        className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" 
          className="p-text" 
          onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            <span>Thank you</span> for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);

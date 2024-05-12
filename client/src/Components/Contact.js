import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_8vuso9s', 'template_9xk4luj', form.current, {
          publicKey: 'oLr7lNLZuRbhsuMPA',
        })
        .then(
          () => {
            console.log('SUCCESS!');
           
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <div>
          <h3 style={{color:'#cc6666', fontWeight:'bold', textAlign: 'center', marginTop:'20px'}}>CONTACT US</h3>
            <form ref={form} onSubmit={sendEmail}>      
                <input name="user_name" type="text" class="feedback-input" placeholder="Name" />   
                <input name="user_email" type="text" class="feedback-input" placeholder="Email" />
                <textarea name="message" class="feedback-input" placeholder="Comment"></textarea>
                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    );
};

export default Contact;
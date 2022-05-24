// @ts-nocheck

import emailjs from 'emailjs-com';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export const Contact = () => {
  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceId = 'service_9zvlgoo';
    const templateId = 'template_jo57fhu';
    const publicKey = 'okF7Pz5vY-xl3RiRz';
    try {
      await emailjs.sendForm(serviceId, templateId, e.target, publicKey);
      alertify.success('Message sent');
    } catch (error) {
      alertify.error('An error occured. Please try again later');
      console.error(error);
    }
  };
  return (
    <section>
      <div className='contact'>
        <form className='contact_form' onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          <div className='email_form'>
            <div className='field'>
              <div>Name</div>
              <input type='text' name='name' />
            </div>
            <div className='field'>
              <div>Email</div>
              <input type='email' name='email' />
            </div>
            <div className='field'>
              <div>Subject</div>
              <input type='text' name='subject' />
            </div>
            <div className='field_message'>
              <div>Message</div>
              <textarea rows='5' name='message' />
            </div>
            <div className='btn_container'>
              <button className='send_btn'>Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

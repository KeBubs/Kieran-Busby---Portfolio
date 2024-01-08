import { useForm, ValidationError } from '@formspree/react';
import Styles from '../styles/Contact.module.css'


export default function ContactForm() {
    return (
      <form  id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xeqyqbby" method="post">
        <fieldset className={Styles.form} id="fs-frm-inputs">
            <section className={Styles.name}>
                <label htmlFor="full-name">Full Name</label>
                <input type="text" name="name" id="full-name" placeholder="First and Last" required />
            </section>
            <div className='light-divider'></div>
          <section className={Styles.email}>
            <label htmlFor="email-address">Email Address</label>
          <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required />
          </section>
          <div className='light-divider'></div>
          <section >
            <label htmlFor="message">Message</label>
          <textarea className={Styles.message} rows="5" name="message" id="message" placeholder="Please enter your message here..." required></textarea>
          <input type="hidden" name="_subject" id="email-subject" defaultValue="Contact Form Submission" />
          </section>
          
        </fieldset>
        <section className={Styles.button}>
        <input type="submit" value="Submit" />
        </section>
      </form>
    );
  }
import { useForm, ValidationError } from '@formspree/react';
import Styles from '../styles/contact.module.css'


export default function ContactForm() {
    return (
      <form  id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xeqyqbby" method="post">
        <fieldset className={Styles.form} id="fs-frm-inputs">
            <section >
                <label className={Styles.nameText} htmlFor="full-name">Full Name</label>
                <input className={Styles.nameInput} type="text" name="name" id="full-name" placeholder="First and Last" required />
            </section>
            <div className='light-divider'></div>
          <section >
            <label className={Styles.emailText} htmlFor="email-address">Email Address</label>
          <input className={Styles.emailInput} type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required />
          </section>
          <div className='light-divider'></div>
          <section >
            <label className={Styles.messageText} htmlFor="message">Message</label>
          <textarea className={Styles.messageInput} rows="5" name="message" id="message" placeholder="Please enter your message here..." required></textarea>
          <input type="hidden" name="_subject" id="email-subject" defaultValue="Contact Form Submission" />
          </section>
          <input className={Styles.button} type="submit" value="Submit" />

        </fieldset>
      </form>
    );
  }
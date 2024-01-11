import Styles from '../styles/contact.module.css'
import ContactForm from '../components/Form'

export default function Contact() {
    return (
            <div className={Styles.container}>
                <section className={Styles.text}>
                    <h2><a id='contact'>Contact Me</a></h2>
                    <p>If you'd like to get in touch to learn more about my projects, or for any other queries, please do! I look forward to hearing from you!</p>
                </section>
                <section className={Styles.formContainer}>
                <ContactForm />
                </section>
            </div>

    )
}
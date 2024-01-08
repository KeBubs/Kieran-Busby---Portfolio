import Headshot from '../assets/headshot.jpeg'
import Styles from '../styles/Profile.module.css'

export default function Profile(){
    return (
        <>
        <img className={Styles.headshot} src={Headshot} alt="A headshot of Kieran Busby" />
        <section className={Styles.aboutMe}>
            <h1>Hi! I'm Kieran.</h1>
            <p>Former Technical Support in Consumer Electronics space, turned Full Stack Developer.</p>
        </section>
        </>
        
    )
}
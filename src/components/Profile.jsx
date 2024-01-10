import Headshot from '../assets/headshot.jpeg'
import Styles from '../styles/profile.module.css'

export default function Profile(){
    return (
        <div className={Styles.container}>
        <section className={Styles.aboutMe}>
            <h1>Hi! I'm Kieran.</h1>
            <p>Former Technical Support in Consumer Electronics space, turned Full Stack Developer.</p>
        </section>
        <img className={Styles.headshot} src={Headshot} alt="A headshot of Kieran Busby" />
        </div>
        
    )
}
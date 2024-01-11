import Styles from '../styles/aboutMe.module.css'
import ControlledCarousel from './Carousel'


export default function AboutMe(){
    return (
        <div className={Styles.container}>
            <section className={Styles.text}>
                <h3><a id="about">About Me</a></h3>
                <p>I consider myself a passionate and motivated individual, who loves learning and implementing new technologies.
                    Having worked over 8 years as a Genius at Apple Inc, I have developed a keen eye for detail, a strong ability to solve problems and work collaboratively amongst a large team, including stakeholders.
                </p>
            </section>
            <section className={Styles.text}>
            </section>
        </div>
    )
}
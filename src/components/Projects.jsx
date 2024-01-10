import Styles from '../styles/projects.module.css'
import TeamRandomiser from '../assets/TeamRandomiser.png'

export default function Projects() {
    return (
        <div className={Styles.container}>
            <section className={Styles.title}>
                <h3>Football Team Randomiser</h3>
            </section>
            <section className={Styles.middleSection}>
                <img className={Styles.image} src={TeamRandomiser}/>
                <p>Created for my 11 a-side team, this team randomiser allows you to select the players which are going to attend the training session as well as how many teams you would like to generate.</p>

            </section>
            <section className={Styles.description}>
                <p>Try my app <a target='_blank' href='https://safc-team-randomiser.vercel.app'>here</a>.</p>
                <p>See the <a target='_blank' href='https://github.com/KeBubs/TeamRandomiser'>code</a>.</p>
            </section>
        </div>
    )
    }
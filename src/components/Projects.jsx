import Styles from '../styles/projects.module.css'
import TeamRandomiser from '../assets/TeamRandomiser.png'
import BeyondBarriers from '../assets/BeyondBarriers.png'

export default function Projects() {
    return (
        <>
        
        <section className={Styles.text}>
                <h1 ><a id="projects">Projects</a></h1>
            </section>
        <div className={Styles.projectContainer}>
            
            
        {/* Start of Project Number One */}
        <div className={Styles.container}>
            <section className={Styles.title}>
                <h3>Football Team Randomiser</h3>
            </section>
            <section className={Styles.middleSection}>
                <img className={Styles.image} src={TeamRandomiser}/>
                <p>Created for my 11 a-side team, this team randomiser allows you to select the players which are going to attend the training session as well as how many teams you would like to generate.</p>

            </section>
            <section className={Styles.description}>
                <p>Try the app <a target='_blank' href='https://safc-team-randomiser.vercel.app'>here</a>.</p>
                <p>See the <a target='_blank' href='https://github.com/KeBubs/TeamRandomiser'>code</a>.</p>
            </section>
        </div>
        {/* End of Project Number One  */}

        {/*  Start of Project Number Two  */}
        <div className={Styles.container}>
            <section className={Styles.title}>
                <h3>Disability Community App</h3>
            </section>
            <section className={Styles.middleSection}>
                <img className={Styles.image} src={BeyondBarriers}/>
                <p>Created for an external stakeholder, this Web App allows the user to search for venues by a venue name/type. Once the venues have been returned, they are then able to use the filters provided to find venues which are accessible to their needs. </p>

            </section>
            <section className={Styles.description}>
                <p>Try the app <a target='_blank' href='https://beyond-barriers.vercel.app'>here</a>.</p>
            </section>
        </div>
        {/* End of Project Two  */}
        </div>
        </>
    )
    }
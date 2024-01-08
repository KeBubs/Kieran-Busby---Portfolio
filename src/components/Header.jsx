import Styles from '../styles/Header.module.css'

export default function Header(){
    return (
        <header className={Styles.headerContainer}>
            <div className={Styles.links}>
                <section>About</section>
                <section>Projects</section>
                <section>Contact</section>
                <section>Socials</section>
            </div>
            
        </header>
    )
}
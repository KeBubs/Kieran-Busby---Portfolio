import Styles from '../styles/header.module.css'

export default function Header(){
    return (
        <header className={Styles.headerContainer}>
            <div className={Styles.links}>
                <section><a href='#about'>About</a></section>
                <section><a href='#projects'>Projects</a></section>
                <section><a href='#contact'>Contact</a></section>
                <section><a href='#socials'>Socials</a></section>
            </div>
            
        </header>
    )
}
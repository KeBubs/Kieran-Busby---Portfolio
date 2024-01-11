import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import Styles from '../styles/socials.module.css'

export default function Socials () {
    return (
        <>
        <div className={Styles.container}>
            <a href='https://github.com/KeBubs'><img src={github} alt="github" className={Styles.icon}/></a>
            <a href='https://www.linkedin.com/in/kieran-busby-7b519b12a'><img  src={linkedin} alt="linkedin" className={Styles.icon}/></a>
        </div>
        <div className='divider'></div>
        </>
        
        
    )
}
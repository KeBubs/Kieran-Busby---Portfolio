import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import Styles from '../styles/socials.module.css'

export default function Socials () {
    return (
        <>
        
    <a id='socials' className={Styles.socials}>
        <div className={Styles.container}>
            
            <a href='https://github.com/KeBubs'><img src={github} alt="github" className={Styles.icon}/></a>
            <a href='https://www.linkedin.com/in/kieran-busby-7b519b12a'><img  src={linkedin} alt="linkedin" className={Styles.icon}/></a>
            <a href='https://twitter.com/kieranbusby'><img  src={twitter} alt="twitter" className={Styles.icon}/></a>
            
        </div>
        </a>
        <div className='divider'></div>
        </>
        
        
    )
}
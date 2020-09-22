import React, {useState , useEffect} from 'react'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHearIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'
import { Link } from 'react-router-dom'
import api from '../../services/api'

function Landing() {
    const [totalConnections,setTotalConnections] = useState(0); /* start with some value */
    
    /* This function is used when the component is loaded . 
    The first param is a function and the second is an array that monitors a variable
    If the variable is changed then the function is automatically executed*/
    
     useEffect ( ()=>  {
         api.get('/connections').then(response => {
            const total = response.data.total;
            setTotalConnections(total)
         })
    }, [])
    return (
        <div id='page-landing'>
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingImg}
                 alt="Plataforma de estudos"
                 className="hero-image"/>
                 <div className="buttons-container">
                     <Link to='/study' className='study'>
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                     </Link>
                     <Link to='/give-classes' className='give-classes'>
                        <img src={giveClassesIcon} alt="DarAula"/>
                        Dar Aula
                     </Link>
                 </div>
                 <span className="total-connections">
                     Total de {totalConnections} conexões já realizadas.
                     <img src={purpleHearIcon} alt="purpleHeart"/>
                 </span>
            </div>
        </div>
    )
}

export default Landing
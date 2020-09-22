import React from 'react'
import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'
import { prependOnceListener } from 'process'


export interface Teacher { 
        id:number;
        name: string;
        avatar: string;
        bio: string;
        cost: number;
        subject : string;
        whatsapp : string; 
    
    }

 interface TeacherItemProps {
    teacher : Teacher;      
    
}

 const TeacherItem:React.FunctionComponent<TeacherItemProps> = (props) =>{   
    function createNewConnection(){
        api.post('connections',{
            user_id : props.teacher.id
        })
    }
    
    return(
        <article className="teacher-item">
                   <header>
                       <img src={props.teacher.avatar} alt={props.teacher.name}/>
                        <div>
                            <strong>{props.teacher.name}</strong>
                            <span>{props.teacher.subject}</span>
                        </div>
                   </header>
                   <p>
                       {props.teacher.bio}
                   </p>
                   <footer>
                       <p>
                           Preço/hora 
                            <strong>R$ {props.teacher.cost}</strong>
                       </p>
                       <a target='blank' onClick={createNewConnection} href={`http://wa.me/${props.teacher.whatsapp}`}>
                           <img src={whatsappIcon} alt="Whatsapp"/>
                           Entrar em contato
                       </a>
                   </footer>
               </article>
    )
}

export default TeacherItem
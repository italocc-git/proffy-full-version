import React, { useState, FormEvent } from 'react'
import './styles.css'

import PageHeader from '../../components/pageHeader'
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
function TeacherList(){
    
    const [name,setName] = useState('')
    const [avatar,setAvatar] = useState('');
    const [bio,setBio] = useState('');
    const [cost,setCost] = useState('');
    
    const [teachers,setTeachers] = useState([])
    const [subject,setSubject] = useState('');
    const [week_day,setWeekDay] = useState('');
    const [time,setTime] = useState('');

    function searchTeachers(e:FormEvent){
        e.preventDefault();
        api.get('/classes',{
            params: {
                subject,
                week_day,
                time,
                name,
                bio,
                avatar,
                cost

            }
        }).then(response =>{
            setTeachers(response.data) /* receive the array */
        })
    }


    return(
       <div className='container' id="page-teacher-list">
           <PageHeader title='Estes são os proffys disponíveis'>
           
           <form id="search-teachers" onSubmit={searchTeachers}>
           <Select name="subject"
                    label='Materia'
                    value={subject}
                    onChange= {(e) => { setSubject(e.target.value)}}
                    options ={[
                        {value : 'Angular' , label : 'Angular'},
                        {value : 'Banco de Dados' , label : 'Banco de Dados'},
                        {value : 'C/C++' , label : 'C/C++'},
                        {value : 'Deploying APlication' , label : 'Deploying APlication'},
                        {value : 'Ethernet , Wi-fi e Redes Móveis' , label : 'Ethernet , Wi-fi e Redes Móveis'},
                        {value : 'FireBird' , label : 'FireBird'},
                        {value : 'Github' , label : 'Github'},
                        {value : 'HTML/CSS' , label : 'HTML/CSS'},
                        {value : 'Internet Protocol' , label : 'Internet Protocol'},
                        {value : 'JAVA' , label : 'JAVA'},
                        {value : 'Laravel' , label : 'Laravel'},
                        {value : 'Montagem e Manutenção de Sistemas' , label : 'Montagem e Manutenção de Sistemas'},
                        {value : 'NodeJS' , label : 'NodeJS'},
                        {value : 'Oracle DB' , label : 'Oracle DB'},
                        {value : 'PHP' , label : 'PHP'},
                        {value : 'Queries SQL' , label : 'Queries SQL'},
                        {value : 'Ruby Rails' , label : 'Ruby Rails'},
                        {value : 'SQLServer' , label : 'SQLServer'},
                        {value : 'T-SQL' , label : 'T-SQL'},
                        {value : 'UML' , label : 'UML'},
                        {value : 'Virtual Machines' , label : 'Virtual Machines'},
                        {value : 'XML' , label : 'XML'},
                        {value : 'Zoom - scheduling reunions' , label : 'Zoom - scheduling reunions'}

                    ]}  />
            <Select name="week_day"
                    label='Dia da Semana'
                    value={week_day}
                    onChange= {(e) => { setWeekDay(e.target.value)}}
                    options ={[
                        {value : '0' , label : 'Domingo'},
                        {value : '1' , label : 'Segunda-feira'},
                        {value : '2' , label : 'Terça-feira'},
                        {value : '3' , label : 'Quarta-feira'},
                        {value : '4' , label : 'Quinta-feira'},
                        {value : '5' , label : 'Sexta-feira'},
                        {value : '6' , label : 'Sábado'}
                    ]}  />        
                
                <Input type='time' name="time" label="Hora"
                value={time}
                onChange= {(e) => { setTime(e.target.value)}} />
               <button type='submit' className=''>Buscar</button>
           </form>
           
           </PageHeader>

           <main>
               {teachers.map((teacher:Teacher) => {
                   return <TeacherItem key={teacher.id} teacher={teacher} />
               })}
           </main>
       </div>
    )
}

export default TeacherList;
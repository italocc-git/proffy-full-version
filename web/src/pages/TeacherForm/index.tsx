import React , {useState, FormEvent} from 'react'
import PageHeader from '../../components/pageHeader';
import {useHistory} from 'react-router-dom';
import './styles.css'
import Select from '../../components/Select'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import api from '../../services/api';
function TeacherForm() {
   
   const history = useHistory();
   
    const [name,setName] = useState('')
    const [avatar,setAvatar] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [bio,setBio] = useState('');

    const [subject,setSubject] = useState('');
    const [cost,setCost] = useState('');


    const [scheduleItems,setScheduleItems] = useState([
        { week_day: 0, from: "", to: "" } /* Initial State  */
    ])

    

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from: "", to: ""  }
        ])
         
    }

    function setScheduleItemValue(position : number , field : string, value : string){
        const newArray = scheduleItems.map((ScheduleItem, index) => {
            if(index === position){
                return {...ScheduleItem, [field] : value} /* Copy all state and make the alteration */
            }
            else {
                return ScheduleItem
            }
            
        })
        console.log(newArray)
        setScheduleItems(newArray)
    }   

    function handleCreateClass(e:FormEvent) {
        e.preventDefault();
        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule : scheduleItems
        }).then(() =>{
            alert('Cadastro realizado com Sucesso !')
            history.push('/') /* Send to home page */
        }).catch( ()=> {
            alert('Erro no Cadastro !')
        })

 
        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        })
    }
    return (
        <div className='container' id="page-teacher-form">

            <PageHeader title='Que incrível que você quer dar aulas.'
                description="O primeiro passo é preencher esse formulário de inscrição"  >

            </PageHeader>

            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus dados</legend>
                   
                    <Input name="name" label='Nome completo' 
                    value={name} onChange={(e)=> {setName(e.target.value)} } />
                    
                    <Input name="avatar" label='Avatar'
                    value={avatar} onChange={(e)=> {setAvatar(e.target.value)}} />
                    
                    <Input name="whatsapp" label='WhatsApp' 
                    value={whatsapp} onChange={(e)=> {setWhatsapp(e.target.value)}} />
                    
                    <Textarea name='bio' label='Biografia'
                    value={bio} onChange={(e)=> {setBio(e.target.value)}} />

                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select name="subject"
                        label='Materia'
                        value={subject} onChange={(e)=> {setSubject(e.target.value)}}
                        options={[
                            { value: 'Angular', label: 'Angular' },
                            { value: 'Banco de Dados', label: 'Banco de Dados' },
                            { value: 'C/C++', label: 'C/C++' },
                            { value: 'Deploying APlication', label: 'Deploying APlication' },
                            { value: 'Ethernet , Wi-fi e Redes Móveis', label: 'Ethernet , Wi-fi e Redes Móveis' },
                            { value: 'FireBird', label: 'FireBird' },
                            { value: 'Github', label: 'Github' },
                            { value: 'HTML/CSS', label: 'HTML/CSS' },
                            { value: 'Internet Protocol', label: 'Internet Protocol' },
                            { value: 'JAVA', label: 'JAVA' },
                            { value: 'Laravel', label: 'Laravel' },
                            { value: 'Montagem e Manutenção de Sistemas', label: 'Montagem e Manutenção de Sistemas' },
                            { value: 'NodeJS', label: 'NodeJS' },
                            { value: 'Oracle DB', label: 'Oracle DB' },
                            { value: 'PHP', label: 'PHP' },
                            { value: 'Queries SQL', label: 'Queries SQL' },
                            { value: 'Ruby Rails', label: 'Ruby Rails' },
                            { value: 'SQLServer', label: 'SQLServer' },
                            { value: 'T-SQL', label: 'T-SQL' },
                            { value: 'UML', label: 'UML' },
                            { value: 'Virtual Machines', label: 'Virtual Machines' },
                            { value: 'XML', label: 'XML' },
                            { value: 'Zoom - scheduling reunions', label: 'Zoom - scheduling reunions' }

                        ]} />
                    <Input name="cost" label='Custo da sua hora por aula (em R$)'
                    value={cost} onChange={(e)=> {setCost(e.target.value)}} />

                </fieldset>
                <fieldset>

                    <legend>Horários Disponíveis
                         <button type='button' onClick={addNewScheduleItem}>+ Novo Horário</button>

                    </legend>

              
                    {scheduleItems.map((scheduleItem,index) => {
                        return (
                            <div key={scheduleItem.week_day} className='schedule-item'>
                                <Select name="week_day"
                                    label='Dia da Semana'
                                    value={scheduleItem.week_day}
                                    onChange={(e)=> {setScheduleItemValue(index,"week_day",e.target.value)}}
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-feira' },
                                        { value: '2', label: 'Terça-feira' },
                                        { value: '3', label: 'Quarta-feira' },
                                        { value: '4', label: 'Quinta-feira' },
                                        { value: '5', label: 'Sexta-feira' },
                                        { value: '6', label: 'Sábado' }
                                    ]} />
                                <Input name="from" label="Das"  type='time'
                                value = {scheduleItem.from}
                                 onChange={(e)=> {setScheduleItemValue(index,"from",e.target.value)}}/>
                                <Input type='time' name="to" label="Até"
                                value={scheduleItem.to}
                                onChange={(e)=> {setScheduleItemValue(index,"to",e.target.value)}} />
                            </div>
                        )
                    })}
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="warningIcon" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type='submit'>Salvar Cadastro</button>
                </footer>
                </form>
            </main>

        </div>
    )
}

export default TeacherForm;
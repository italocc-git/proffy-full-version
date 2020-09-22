import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    const [favorites, setFavorites] = useState<number[]>([]) /* ARRAY NUMERICO */

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);


    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response)
                /* Array com IDs de professores */
                const favoritedTeachersIds = favoritedTeachers.map((teacherItem: Teacher) => {
                    return teacherItem.id;
                })

                setFavorites(favoritedTeachersIds)
            }

        })
    }
    useFocusEffect(() => {
        loadFavorites();
    })



    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function handleFiltersSubmit() {
        /* Carrega os favoritos sempre que eu clico para filtrar a busca de professores */
        loadFavorites();

        const response = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        })
        setIsFiltersVisible(false)
        setTeachers(response.data)
    }

    return (
        <View style={styles.container} >
            <PageHeader title='Proffys Disponíveis'
                headerRight={(<BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Text style={styles.label}> Filtrar </Text>
                </BorderlessButton>)} >

                {isFiltersVisible && (<View style={styles.searchForm}>
                    <Text style={styles.label} >Matéria</Text>
                    <TextInput style={styles.input} placeholderTextColor='#c1bccc'
                        value={subject} onChangeText={text => setSubject(text)} placeholder='Qual a matéria' />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput style={styles.input} placeholderTextColor='#c1bccc'
                                value={week_day} onChangeText={text => setWeekDay(text)} placeholder='Qual o dia ?' />

                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput style={styles.input} placeholderTextColor='#c1bccc'
                                value={time} onChangeText={text => setTime(text)} placeholder='Qual o horário?' />

                        </View>
                    </View>
                    <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>)}

            </PageHeader>



            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16, paddingBottom: 16
            }}>
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem key={teacher.id}
                            favorited={favorites.includes(teacher.id)}
                            teacher={teacher} />
                    )
                })}

            </ScrollView>
        </View>
    )
}

export default TeacherList
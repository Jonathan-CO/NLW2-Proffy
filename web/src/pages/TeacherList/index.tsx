import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState<Teacher[]>([])

  function searchTeatchers(e: FormEvent) {
    e.preventDefault();

    api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    }).then(response => {
      console.log(response.data)

      setTeachers(response.data)

    }).catch(err => console.log(err))

  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form onSubmit={searchTeatchers} id="search-teachers">

          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: "Matemática", label: "Matemática" },
              { value: "Lógica", label: "Lógica" },
              { value: "Informática", label: "Informáticaa" },
              { value: "Física", label: "MatemáticaFísica" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda" },
              { value: "2", label: "Terça" },
              { value: "3", label: "Quarta" },
              { value: "4", label: "Quinta" },
              { value: "5", label: "Sexta" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>

      </ PageHeader >

      <main>
        {teachers.map(teacher => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}
      </main>
    </div>
  )
};

export default TeacherList;
import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input name="in1" type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia da Semana</label>
            <input name="in1" type="text" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input name="in1" type="text" id="time" />
          </div>

        </form>

      </ PageHeader >
    </div>
  )
};

export default TeacherList;
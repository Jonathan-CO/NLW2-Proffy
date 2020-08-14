import React from 'react';

import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList:React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys Disponíveis"/>
      <TeacherItem />
    </Container>
  )
};

export default TeacherList;

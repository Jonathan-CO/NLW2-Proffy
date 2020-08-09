import React from 'react';
import { Container, ImgBackground, Title, Description, OkButton, OkButtonText } from './styles';

import giveclassesBgImg from '../../assets/give-classes-background.png';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GiveClasses:React.FC = () => {

  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Container>
      <ImgBackground source={giveclassesBgImg} resizeMode='contain'>
        <Title>Quer ser um Proffy?</Title>
        <Description>Para começar você precisa se cadastrar como professor na nossa plataforma web.</Description>
      </ImgBackground>

      <OkButton onPress={handleNavigateBack}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
      {/* <Header /> */}
    </Container>
    );
}

export default GiveClasses;

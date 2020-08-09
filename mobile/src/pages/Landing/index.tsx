import React from 'react';

import {
  Container,
  Title,
  TitleBold,
  Banner,
  ButtonsContainer,
  ButtonsSecondary,
  ButtonsPrimary,
  ButtonText,
  TotalConnections
} from './styles';

import { useNavigation } from '@react-navigation/native'

import landingImg from '../../assets/landing.png';
import studyIcon from '../../assets/icons/study.png';
import giveClassesIcon from '../../assets/icons/give-classes.png';
import heartIcon from '../../assets/icons/heart.png';

import { Image, TouchableOpacity } from 'react-native';

const Landing: React.FC = () => {

  const navigation = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigation.navigate('Study');
  }

  return (
    <Container>
      <Banner source={landingImg} style={{resizeMode: 'contain'}}/>

      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>
      <ButtonsContainer>
        <ButtonsSecondary onPress={handleNavigateToStudyPages}>
          <Image source={studyIcon}/>
          <ButtonText>Estudar</ButtonText>
        </ButtonsSecondary>

        <ButtonsPrimary onPress={handleNavigateToGiveClassesPage} >
          <Image source={giveClassesIcon}/>
          <ButtonText>Dar aulas</ButtonText>

        </ButtonsPrimary>
      </ButtonsContainer>

      <TotalConnections>
        Total de 285 conexões realizadas {' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};
export default Landing;

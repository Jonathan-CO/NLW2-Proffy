import React from 'react';
import { Container } from './styles';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import {TopBar} from './styles';

import backIcon from '../../assets/icons/back.png';
import logoImg from '../../assets/logo.png';
import { Title } from './styles';
import { useNavigation } from '@react-navigation/native';


interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {

  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <Container>
      <TopBar>

        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Title>{title}</Title>

    </Container>
  )
};

export default PageHeader;

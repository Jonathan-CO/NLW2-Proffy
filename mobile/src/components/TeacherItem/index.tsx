import React from 'react';
import {
  Container,
  Profile,
  ImageProfile,
  ProfileInfo,
  TextName,
  TextInfo,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText
} from './styles';


import heartOutlineIcon from '../../assets/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import { Image } from 'react-native';

const TeacherItem:React.FC = () => {
  return (
    <Container>
      <Profile>
        <ImageProfile
        style={{ width: 50, height:50, borderRadius:25}}
        source={{
          uri: "https://avatars0.githubusercontent.com/u/31313701?s=460&u=d200a661c6040ce7aae579d96e651d114af8cdff&v=4"
        }}/>

        <ProfileInfo>
          <TextName>Jonathan da Cunha Oliveira</TextName>
          <TextInfo>Lógica</TextInfo>
        </ProfileInfo>

      </Profile>

      <Bio>Entusiassta das melhores tecnologias de desenvolvimento. </Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ 250,00</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton>
            <Image source={heartOutlineIcon} />
          </FavoriteButton>

          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default TeacherItem;

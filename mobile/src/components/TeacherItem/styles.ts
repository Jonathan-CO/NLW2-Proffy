import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #FFF;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const ImageProfile = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const TextName = styled.Text`
  font-family: 'Archivo-Bold';
  color: #32264d;
  font-size: 20px;
`;

export const TextInfo = styled.Text`
  font-family: 'Poppins-Regular';
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  margin: 0 24px;
  font-family: 'poppins-Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

export const Footer  = styled.View`
background-color: #FAFAFC;
padding: 24px;
align-items: center;
`;

export const Price  = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #6a6180;
`;

export const PriceValue = styled.Text`
  font-family: 'Archivo-Bold';
  color: #8257e5;
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(RectButton)`
  background-color: #8257e5;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButton = styled(RectButton)`
  background-color: #04d361;
  flex:1;
  height: 56px;
  flex-direction: row;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 16px;
  color: #FFF;
  margin-left: 16px;
`;

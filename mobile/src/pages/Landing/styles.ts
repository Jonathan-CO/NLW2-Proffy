import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #8257e5;
  padding: 30px;
`;

export const Banner = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 30px;
  color: #FFF;
  margin-top: 50px;
  font-family: 'Poppins-Regular';
`;

export const TitleBold = styled.Text`
  font-family: 'Poppins-SemiBold';
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)`
  height: 150px;
  width:  48%;
  /* align-items: center; */
  justify-content: space-between;
  border-radius: 24px;
  padding: 20px;
`;

export const ButtonsPrimary = styled(Button)`
background-color: #9871f5;
`;

export const ButtonsSecondary = styled(Button)`
background-color: #04d361;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo-Bold';
  color: #FFF;
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #d4c2ff;
  line-height: 20px;
  max-width: 140px;
  margin-top: 20px;
`;

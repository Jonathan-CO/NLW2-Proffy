import  styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #8257e5;
  padding: 30px;
`;

export const ImgBackground = styled.ImageBackground`
  flex:1;
  justify-content: center;
  /* width: 100%;
  height: 100%; */
`
export const Title = styled.Text`
font-family: 'Archivo-Bold';
color: #FFF;
font-size: 32px;
line-height: 37px;
max-width: 180px;
`

export const Description = styled.Text`
  margin-top: 24px;
  color: #d4c2ff;
  font-size:16px;
  line-height: 26px;
  font-family: 'Poppins-Regular';
  max-width: 240px;
`;

export const OkButton = styled(RectButton)`
  background-color: #04d361;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 40px 0;
`;

export const OkButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-family: 'Archivo-Bold';
`

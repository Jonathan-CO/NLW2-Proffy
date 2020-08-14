import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #8257e5;
  padding: 40px;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Bold';
  color: #FFF;
  font-size: 24px;
  line-height: 32px;
  margin: 32px 0;
  max-width: 160px;
`;

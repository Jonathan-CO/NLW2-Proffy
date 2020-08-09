import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

// Ionicons.loadFont();

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => {

  async function loadIcon() {
    await Icon.loadFont().then(()=>{
      console.log("loaded")
    });
  }

  loadIcon();

  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          height: 64
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'Archivo-Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#EBEBF5',
        inactiveTintColor: '#C1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen
      name="TeacherList"
      component={TeacherList}
      options={{
        tabBarLabel:"Proffys",
        tabBarIcon: ({color, size, focused}) => {
          return (
            <Icon name="easel" size={size} color={focused ? '#8251e5' : color} />
          )
        }
      }}
      />
      <Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel:"Favoritos",
        tabBarIcon: ({color, size, focused}) => {
          return (
            <Icon name="heart" size={size} color={focused ? '#8251e5' : color} />
          )
        }
      }}
      />
    </Navigator>
  )
};

export default StudyTabs;

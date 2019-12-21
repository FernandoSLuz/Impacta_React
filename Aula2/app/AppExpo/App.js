import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/home';
import Contatos from './screens/Contatos'
import Cursos from './screens/Cursos'

const Stack = createStackNavigator({
  Home: {
    navigationOptions: {
      title: 'Home',
    },
    screen: Home
  },
  Cursos : {
    navigationOptions :{
      title: 'Cursos',
    },
    screen: Cursos
  },
  Contatos : {
    navigationOptions :{
      title: 'Contatos',
    },
    screen: Contatos
  }
})

export default createAppContainer(Stack)
/* export default class App extends React.Component{
  render(){
      return (
        <Home></Home>
      )
  }
} */
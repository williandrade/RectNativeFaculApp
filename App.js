import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Splash from './components/splash/Splash';
import Home from './components/home/Home';

const App = createStackNavigator({
  SplashScreen: { screen: Splash },
  Home: { screen: Home }
}, {
    // headerMode: 'screen',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#FFFFFF'
    },
    // navigationOptions: {
    // header: null
    // }
  });

export default App;

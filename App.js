import React from 'react';

import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';

import { Session } from './reducers/Session';

import Splash from './components/splash/Splash';
import Home from './components/home/Home';
import Question from './components/question/Question';
import End from './components/end/End';

const AppNavigator = createStackNavigator({
  SplashScreen: { screen: Splash },
  Home: { screen: Home },
  Question: { screen: Question },
  End: { screen: End }
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

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer,
  session: Session
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root;

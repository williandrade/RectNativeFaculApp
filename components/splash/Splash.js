import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { StyleSheet, View, SafeAreaView, Image, Text } from 'react-native';
import CustomText from '../_core/custom-text/CustomText';
import { Font } from 'expo';

import Globe from '../../assets/planet-earth.png';
import Cap from '../../assets/CAP.png';

export default class Splash extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this._navigateTo('Difficulty');
    }, 2 * 1000);
  }

  componentDidUpdate() {
  }

  _navigateTo = (routeName: string) => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.globe}>
          <Image source={Globe} />
        </View>
        <View style={styles.overlay}>
          <CustomText fontSize='48' fontType='light' style={{ marginLeft: -80 }}>Capitão</CustomText>
          <CustomText fontSize='48' fontType='bold'>Planeta</CustomText>
          <Image source={Cap} />
          <CustomText fontSize='48' fontType='light'>O Jogo</CustomText>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  globe: {
    position: 'absolute',
    top: 0,
    bottom: 200,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cap: {

  }
});

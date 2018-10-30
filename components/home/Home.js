import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, TextInput } from 'react-native';
import CustomText from '../_core/custom-text/CustomText';

import Cap from '../../assets/CAP.png';
import scenarioTree from '../../assets/scenario.png';

export default class Splash extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.topMessage}>
          <CustomText style={{ color: '#505050' }} fontSize='48' fontType='light'>Digite o {'\n'}<CustomText fontSize='48'>Número da casa</CustomText> onde você está</CustomText>
        </View>
        <View style={styles.scenario}>
          <Image style={styles.scenarioCap} source={Cap} />
          <Image style={styles.scenarioTree} source={scenarioTree} />
          <View style={styles.inputBox}>
            <TextInput style={{width: 130, height: 130, fontSize: 48, textAlign: 'center'}} placeholder="0" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topMessage: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20
  },
  scenario: {
    flex: 2,
    alignItems: 'center'
  },
  scenarioCap: {
    position: 'absolute',
    bottom: -100,
    left: -60,
    zIndex: 2
  },
  scenarioTree: {
    position: 'absolute',
    right: -50,
    bottom: -200
  },
  inputBox: {
    width: 140,
    height: 140,
    top: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#222222',
    borderWidth: 1,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import CustomText from '../_core/custom-text/CustomText';

import Cap from '../../assets/CAP.png';
import scenarioTree from '../../assets/scenario.png';

import { connect } from 'react-redux';
import { setHouse } from '../../actions/Session';

import questions from '../../assets/questions';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmitHouseNumber = this.onSubmitHouseNumber.bind(this);
    this.onInputChangedclickPosition = this.onInputChanged.bind(this);

    this.state = {
      houseNumber: ''
    }
  }

  onSubmitHouseNumber() {
    const houseNumber = parseInt(this.state.houseNumber);

    if (!isNaN(houseNumber) && houseNumber > 0) {
      const { dispatch } = this.props;
      dispatch(setHouse(houseNumber));

      const { session } = this.props;

      let level = 'fourthYear';
      switch (session.classLevel) {
        case 2:
          level = 'secondYear';
          break;
        case 3:
          level = 'thirdYear';
          break;
      }

      const question = questions[level][houseNumber - 1];

      if (question) {
        this.props.navigation.navigate('Question');
      } else {
        Alert.alert('Não há uma pergunta para essa casa, pode lançar o dado novamente!');
      }
    } else {
      Alert.alert('Você deve informar a sua posição no tabuleiro');
    }

    this.setState({ houseNumber: '' });
  }

  onInputChanged(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }

    this.setState({ houseNumber: newText });
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
            <TextInput style={{ width: 130, height: 130, fontSize: 48, textAlign: 'center' }} placeholder="0"
              returnKeyType='done'
              keyboardType='numeric'
              onSubmitEditing={this.onSubmitHouseNumber}
              onChangeText={(text) => this.onInputChanged(text)}
              value={this.state.houseNumber} />
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

function appState(state) {
  return {
    session: state.session
  };
}

export default connect(appState)(Home);
import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, Alert, TouchableOpacity } from 'react-native';
import CustomText from '../_core/custom-text/CustomText';

import Sunny from '../../assets/sunny.png';
import Planet4 from '../../assets/planet_4.png';
import Planet5 from '../../assets/planet_5.png';
import Planet6 from '../../assets/planet_6.png';

import { connect } from 'react-redux';
import { setClassLevel } from '../../actions/Session';

import questions from '../../assets/questions';

class Difficulty extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmitClassLevel = this.onSubmitClassLevel.bind(this);
    }

    onSubmitClassLevel(classLevel) {
        const { dispatch } = this.props;
        dispatch(setClassLevel(classLevel));

        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.topMessage}>
                    <CustomText style={{ color: '#505050' }} fontSize='48' fontType='light'>Em qual série {'\n'}<CustomText fontSize='48'>Você está</CustomText></CustomText>
                </View>
                <View style={styles.scenario}>
                    <Image style={styles.scenarioSunny} source={Sunny} />
                    <TouchableOpacity style={styles.planet4} onPress={() => this.onSubmitClassLevel(4)}>
                        <Image source={Planet4} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.planet5} onPress={() => this.onSubmitClassLevel(5)}>
                        <Image source={Planet5} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.planet6} onPress={() => this.onSubmitClassLevel(6)}>
                        <Image source={Planet6} />
                    </TouchableOpacity> */}
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    topMessage: {
        flex: 1,
        padding: 20
    },
    scenario: {
        flex: 4,
        alignItems: 'center'
    },
    scenarioSunny: {
        position: 'absolute',
        top: 80,
        left: -120,
        zIndex: 2
    },
    planet4: {
        position: 'absolute',
        right: 100,
    },
    planet5: {
        position: 'absolute',
        right: 50,
        top: 150
    },
    planet6: {
        position: 'absolute',
        right: 100,
        top: 300
    }
});

function appState(state) {
    return {
        session: state.session
    };
}

export default connect(appState)(Difficulty);
import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';
import CustomText from '../_core/custom-text/CustomText';

import Cap from '../../assets/CAP.png';
import scenarioTree from '../../assets/scenario.png';

import { connect } from 'react-redux';
import { clearPoint } from '../../actions/Session';

class End extends React.Component {

    constructor(props) {
        super(props);

        this.resetGame = this.resetGame.bind(this);

        const { session } = this.props;

        this.state = {
            points: session.points
        }
    }

    resetGame() {
        const { dispatch } = this.props;

        dispatch(clearPoint());
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.scenario}>
                    <Image style={styles.scenarioCap} source={Cap} />
                    <Image style={styles.scenarioTree} source={scenarioTree} />
                    <View style={styles.message}>
                        <CustomText style={{ color: '#505050' }} fontSize='48' fontType='light'>Muito Bem</CustomText>
                        <CustomText style={{ color: '#505050' }} fontSize='19' fontType='light'>Você chegou ao fim do jogo</CustomText>
                        <CustomText style={{ color: '#309976' }} fontSize='19' fontType='bold'>Pontuação Final</CustomText>
                        {/* <View style={{ marginTop: 20, marginBottom: 20 }}>
                            <CustomText style={{ color: '#505050', marginTop: 10 }} fontSize='32' fontType='light'>1. João</CustomText>
                            <CustomText style={{ color: '#505050', marginTop: 10 }} fontSize='32' fontType='light'>2. João</CustomText>
                            <CustomText style={{ color: '#505050', marginTop: 10 }} fontSize='32' fontType='light'>3. João</CustomText>
                        </View> */}
                        <CustomText style={{ color: '#309976', margin: 20 }} fontSize='72' fontType='bold'>{this.state.points}</CustomText>
                        <TouchableOpacity onPress={this.resetGame}>
                            <View style={[styles.btn]}>
                                <CustomText style={{ color: '#ffffff', textAlign: 'center' }}>JOGAR DE NOVO</CustomText>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    message: {
        zIndex: 3,
        marginTop: 100
    },
    scenario: {
        flex: 2,
        alignItems: 'center'
    },
    scenarioCap: {
        position: 'absolute',
        bottom: -150,
        right: -100,
        zIndex: 2
    },
    scenarioTree: {
        position: 'absolute',
        right: -400,
        bottom: -50
    },
    btn: {
        backgroundColor: '#66BB6A',
        width: 130,
        height: 50,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }
});

function appState(state) {
    return {
        session: state.session
    };
}

export default connect(appState)(End);
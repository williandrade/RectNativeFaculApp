import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, Button, Text, TouchableOpacity, Platform } from 'react-native';
import CustomText from '../_core/custom-text/CustomText';
import ModalPoints from '../_core/modal-points/ModalPoints';

import Sunny from '../../assets/sunny.png';
import scenarioTree from '../../assets/scenario.png';

import { connect } from 'react-redux';
import { addPoint } from '../../actions/Session';

import questions from '../../assets/questions';

class Question extends React.Component {

    constructor(props) {
        super(props);

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

        const question = questions[level][session.house - 1];

        let fontSizeGuess = 35;

        if (question.question.length > 100) {
            fontSizeGuess = 25;
        } else if (question.question.length > 50) {
            fontSizeGuess = 30;
        }

        this.state = {
            modal: {
                visible: false,
                points: 5,
                correct: true
            },
            answer: -1,
            question: question,
            fontSizeGuess: fontSizeGuess
        }

        this.chooseAnswer = this.chooseAnswer.bind(this);
        this.continueAction = this.continueAction.bind(this);
    }

    chooseAnswer(index) {
        this.setState({
            answer: index
        });

        setTimeout(() => {
            let modal = { ...this.state.modal };
            modal.visible = true;
            modal.correct = this.state.question.options[this.state.answer].correct;

            if (modal.correct) {
                const { dispatch } = this.props;
                dispatch(addPoint(modal.points));
            }

            this.setState({
                modal: modal
            });
        }, 1000);
    }

    continueAction() {
        let modal = { ...this.state.modal };
        modal.visible = false;

        this.setState({
            modal: modal
        });

        setTimeout(() => {
            const { session } = this.props;

            if (session.points >= 15) {
                this.props.navigation.navigate('End');
            } else {
                this.props.navigation.navigate('Home');
            }
        }, 100);
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ModalPoints visible={this.state.modal.visible} points={this.state.modal.points} correct={this.state.modal.correct} callBack={this.continueAction} />
                <View style={styles.topMessage}>
                    {Platform.OS === 'ios' ? (
                        <Text style={{ color: '#505050', fontSize: 40 }} adjustsFontSizeToFit={true} numberOfLines={25} allowFontScaling={true}>
                            {this.state.question.question}
                        </Text>
                    ) : (
                            <Text style={{ color: '#505050', fontSize: this.state.fontSizeGuess }} adjustsFontSizeToFit={true} numberOfLines={25} allowFontScaling={true}>
                                {this.state.question.question}
                            </Text>
                        )}
                </View>
                <View style={styles.scenario}>
                    <Image style={styles.scenarioSunny} source={Sunny} />
                    <Image style={styles.scenarioTree} source={scenarioTree} />
                    <View style={styles.inputBox}>
                        {this.state.question.options.map((item, index) => {
                            if (this.state.answer > -1) {

                                let viewStyle = [styles.btn];

                                if (this.state.answer == index) {
                                    viewStyle.push(styles.btnChoosed);
                                    if (!item.correct) {
                                        viewStyle.push(styles.btnWrong);
                                    }
                                }
                                if (item.correct) {
                                    viewStyle.push(styles.btnCorrect);
                                }

                                return (
                                    <View key={index} style={viewStyle}>
                                        <Text style={{ color: '#ffffff', textAlign: 'center' }} adjustsFontSizeToFit={true} numberOfLines={10}>{item.text}</Text>
                                    </View>
                                )
                            } else {
                                return (
                                    <TouchableOpacity key={index} onPress={() => this.chooseAnswer(index)}>
                                        <View style={[styles.btn]}>
                                            <Text style={{ color: '#ffffff', textAlign: 'center' }} adjustsFontSizeToFit={true} numberOfLines={10}>{item.text}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    topMessage: {
        flex: 1,
        padding: 20,
        zIndex: 3
    },
    scenario: {
        flex: 2,
        alignItems: 'center'
    },
    scenarioSunny: {
        position: 'absolute',
        top: -150,
        right: -100,
        zIndex: 2
    },
    scenarioTree: {
        position: 'absolute',
        right: -50,
        bottom: -200
    },
    inputBox: {
        top: 20,
        zIndex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: "#4E5DC3",
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    btnCorrect: {
        backgroundColor: "#73A03C",
    },
    btnWrong: {
        backgroundColor: "#C34E4E",
    },
    btnChoosed: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 1
    }
});

function appState(state) {
    return {
        session: state.session
    };
}

export default connect(appState)(Question);
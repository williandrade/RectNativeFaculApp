import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Font } from 'expo';

import CustomText from '../custom-text/CustomText';

export default class ModalPoints extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let correct = true;

        if (this.props.correct === false) {
            correct = false;
        }

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    this.props.callBack();
                }}>

                <View style={styles.modal}>
                    <CenterComponent correct={correct} points={this.props.points} />
                    <TouchableOpacity onPress={() => this.props.callBack()}>
                        <View style={[styles.btn]}>
                            <Text style={{ color: '#ffffff', textAlign: 'center' }} adjustsFontSizeToFit={true} numberOfLines={10}>Continuar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal >
        );

    }
}

class CenterComponent extends React.Component {
    render() {
        if (this.props.correct) {
            return (
                <View style={styles.content}>
                    <CustomText style={{ color: '#505050' }} fontSize='30' fontType='light'>Parabéns!!</CustomText>
                    <CustomText style={{ color: '#505050' }} fontSize='22' fontType='light'>Você Acertou</CustomText>
                    <CustomText style={{ color: '#505050', marginTop: 37 }} fontSize='22' fontType='light'>Você Ganhou:</CustomText>
                    <CustomText style={{ color: '#83BD9E' }} fontSize='100' fontType='bold'>{this.props.points}</CustomText>
                    <CustomText style={{ color: '#83BD9E' }} fontSize='22'>PONTOS</CustomText>
                </View>
            );
        } else {
            return (
                <View style={styles.content}>
                    <CustomText style={{ color: '#505050' }} fontSize='30' fontType='light'>Eita</CustomText>
                    <CustomText style={{ color: '#505050' }} fontSize='22' fontType='light'>Você errou =(</CustomText>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#FFFFFF',
        margin: 20,
        marginTop: 50,
        borderColor: '#83BD9E',
        borderWidth: 5,
        borderRadius: 8,
        padding: 80,
        zIndex: 9999,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: "#83BD9E",
        width: 100,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }
});

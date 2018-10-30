import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font } from 'expo';

export default class CustomText extends React.Component {

    constructor(props) {
        super(props);

        this.state = { ready: false };
    }

    async componentDidMount() {
        try {
            await Font.loadAsync({
                'roboto-bold': require('../../../assets/Roboto/Roboto-Bold.ttf'),
                'roboto-light': require('../../../assets/Roboto/Roboto-Light.ttf'),
                'roboto-medium': require('../../../assets/Roboto/Roboto-Medium.ttf'),
            });
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({ ready: true });
        }
    }

    render() {
        const fontSize = this.props.fontSize ? parseInt(this.props.fontSize) : 12;
        let fontFamily = 'roboto';

        switch (this.props.fontType) {
            case 'bold':
                fontFamily += '-bold'
                break;
            case 'light':
                fontFamily += '-light'
                break;
            default:
                fontFamily += '-medium'
                break;
        }

        return (
            <Text style={this.props.style}>
                {
                    this.state.ready ? (
                        <Text style={{ fontFamily: fontFamily, fontSize: fontSize }}>{this.props.children}</Text>
                    ) : null
                }
            </Text>
        );
    }
}

const styles = StyleSheet.create({
});

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
        let style = {};

        if (this.props.fontSize) {
            style.fontSize = parseInt(this.props.fontSize)
        }
        if (this.props.textAlign) {
            style.textAlign = this.props.textAlign;
        }
        switch (this.props.fontType) {
            case 'bold':
                style.fontFamily = 'roboto-bold'
                break;
            case 'light':
                style.fontFamily = 'roboto-light'
                break;
            default:
                style.fontFamily = 'roboto-medium'
                break;
        }

        return (
            <Text style={this.props.style}>
                {
                    this.state.ready ? (
                        <Text style={style}>{this.props.children}</Text>
                    ) : null
                }
            </Text>
        );
    }
}

const styles = StyleSheet.create({
});

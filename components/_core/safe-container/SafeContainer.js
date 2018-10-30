import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class SafeContainer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <SafeAreaView style={styles.safeHeaderContainer}>
                        <Text>HEADER</Text>
                    </SafeAreaView>
                </View>
                <View style={styles.bodyContainer}>
                    <SafeAreaView style={styles.safeBodyContainer}>
                        {this.props.children}
                    </SafeAreaView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    headerContainer: {
        height: 80,
        backgroundColor: '#83C17F'
    },
    safeHeaderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: '#E397D5'
    },
    safeBodyContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
});

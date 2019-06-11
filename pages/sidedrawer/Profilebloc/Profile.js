import React from "react";

import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Alert,
    StatusBar
  } from "react-native";

export default class Profile extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.trial}>
                    this is profile page
                </Text>
                    <Button onPress={()=>this.props.navigation.navigate('Profiletwo')}
                    title="go to followers"/>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'coral'
    },
    trial: {
        fontSize: 50,
        color: 'white'
    }
})
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class RegisterUser extends React.Component {
	render() {
		return(
			<View style={styles.container}>
        <View style={styles.containerone}>
        <Text style={styles.titlestyle}>Username</Text>
        <TextInput underlineColorAndroid="orange" selectionColor='orange'></TextInput>
        <Text style={styles.titlestyle}>Password</Text>
        <TextInput underlineColorAndroid="orange" selectionColor='orange'></TextInput>
        <Text style={styles.titlestyle}>First Name</Text>
        <TextInput underlineColorAndroid="orange" selectionColor='orange'></TextInput>
        <Text style={styles.titlestyle}>Last Name</Text>
        <TextInput underlineColorAndroid="orange" selectionColor='orange'></TextInput>
        <Text style={styles.titlestyle}>Email ID</Text>
        <TextInput underlineColorAndroid="orange" selectionColor='orange'></TextInput>
        <Text style={styles.titlestyle}>Phone Number</Text>
        <TextInput underlineColorAndroid="orange" selectionColor='orange'></TextInput>
        </View>
			</View>
		)
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
  },
  containerone: {
    padding: 20,
  },
  titlestyle: {
    marginTop: 10,
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputstyle: {

  }
})
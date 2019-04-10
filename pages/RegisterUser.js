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
import firebase from "react-native-firebase";

export default class RegisterUser extends React.Component {
  

  constructor(props){
    super(props),
    this.state = { email: '', password: '', errorMessage: null }
  }
  
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>this.props.navigation.navigate('Landingone'))
      .catch(error=>this.setState({errorMessage: error.message}))
  }

	render() {
		return(
			<View style={styles.container}>
        {/* <View style={styles.containerone}>
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
        </View> */}

        <Text style={styles.titlestyle}>Email ID</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          underlineColorAndroid="orange" 
          selectionColor='orange'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />

        <Text style={styles.titlestyle}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.textInput}
          underlineColorAndroid="orange" 
          selectionColor='orange'
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up!" onPress={()=>this.handleSignUp()} />
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

  },
})
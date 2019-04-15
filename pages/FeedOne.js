import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  StatusBar,
	WebView,
	Platform
} from "react-native";

export default class FeedOne extends React.Component {
  render() {
    return (
		<View style={styles.container}>
			<View style={{ height: 300 }}>
				<WebView 
					style={styles.WebViewContainer}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					source={{uri: 'https://www.youtube.com/embed/JKCgwL-IfgM'}}>

				</WebView>  
 			</View>
		</View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
    backgroundColor: "#263238"
	},
	WebViewContainer: {
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
  }
});

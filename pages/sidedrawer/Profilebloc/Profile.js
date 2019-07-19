import React from "react";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
	StatusBar,
	Image
} from "react-native";

import {
  Container,
  Header,
  Button,
  Form,
  Item,
  Input,
  Label,
  Text,
  Icon
} from "native-base";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import  MyBackButton  from "../../MyBackButton";
import AsyncStorage from "@react-native-community/async-storage";


class Editbutton extends React.Component{
	render(){
		return(
			<TouchableOpacity onPress={()=>this.props.navigation.navigate('Profilethree')}>
				<Text style={{color:'white'}}>Edit</Text>
			</TouchableOpacity>
		)
	}
}


export default class Profile extends React.Component {
	constructor(props){
		super(props)
		this.state={
			id: null,
			LOGINDATA: '',
			errorMessage: null,
			LOGINOBJECT: null,
		}
	}
	
	componentDidMount(){	
		this.pullProfile()
	}


	static navigationOptions = ({ navigation, navigationOptions}) => {
		const { params } = navigation.state;

		return {
			headerStyle:({backgroundColor:'#fdbd30', elevation:0}),
			headerLeftContainerStyle:({padding:5, }),
			headerRightContainerStyle:({paddingRight:15, paddingTop:5}),
			headerTitle:(<Text style={{color:'white', fontSize:wp('5.5%')}}>Profile</Text>),
			headerLeft: (
				<MyBackButton navigation={navigation} />
			),
			headerRight: (
				<Editbutton navigation={navigation} />
			)
		};
	}

	pullProfile = async () => {
		const url = "http://admin.spiritpedia.xceedtech.in/index.php?r=API/View";
		
		var LOGINDATA = await AsyncStorage.getItem('LOGINDATA')
		let DATA = JSON.parse(LOGINDATA);
		let id = DATA.id; 

		let MAIL = JSON.stringify({
			id:id,
			model:"Profile"
		})

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: MAIL
		}).then(response=>response.json())
		.then(resjson=>{
			this.setState({LOGINDATA: resjson});
			console.warn(this.state.LOGINDATA);
		}).catch(error=>{
			this.setState({errorMessage: error.message})
			console.warn(this.state.errorMessage);
          	alert(this.state.errorMessage);
		})
	}

  render() {
    return (
      <View style={styles.container}>
				<View style={{height:hp('37%')}}>
					<View style={{alignItems:'center',marginTop:hp('6%')}}>
						<Image style={{height:wp('30%'), width:wp('30%'), borderRadius:wp('15%')}}
						source={require('../../../assets/images/drawer.png')}/>
					</View>
					<View style={{marginTop:hp('1%')}}>
						<Text style={{textAlign:'center', fontSize:wp('4%')}}>{this.state.LOGINDATA.fullname}</Text>
						<TouchableOpacity onPress={()=>this.props.navigation.navigate('Profiletwo')}>
							<View style={{marginTop:hp('1%')}}>
								<Text style={{textAlign:'center', fontSize:wp('3.5%'), color:'gray'}}>
									{this.state.LOGINDATA.followers ? this.state.LOGINDATA.followers : 0 } followers
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<Button rounded style={{backgroundColor:'#fdbd30', height:hp('4%'), width:wp('33%'), paddingHorizontal:wp('4%'), alignSelf:'center', marginTop:hp('1%'), elevation:0}}>
						<Text>Follow</Text>
					</Button>
				</View>
				<View style={{width:wp('83%'), height:hp('12%'), borderColor:'lightgray', borderTopWidth:1, borderBottomWidth:1, justifyContent:'center'}}>
					<Text numberOfLines={6} style={{fontSize:wp('2.2%'), textAlign:'justify', width:wp('83%'), }}>
						{this.state.LOGINDATA.about ? this.state.LOGINDATA.about : (<Text style={{fontSize:wp('4%'), textAlign:'center', color:'lightgray', alignSelf:'center'}}>No bio yet</Text>)} 
					</Text>
				</View>

{/* Array goes here */}

				<View style={{width:wp('83%')}}>
					<View style={{marginTop:hp('1%')}}>
						<Text style={styles.tabtitles}>Favourite Spirit</Text>
							{this.state.LOGINDATA.favourite_spirit ? (	
								<View style={{flexDirection:'row', marginTop:hp('0.5%')}}>
									<View style={styles.tabcontainer}><Text style={styles.tabtext}>Rum</Text></View>
									<View style={styles.tabcontainer}><Text style={styles.tabtext}>Beer</Text></View>
								</View>
							) : (<Text style={{color:'lightgray'}}>--x--</Text>)}			
					</View>

					<View style={{marginTop:hp('1%')}}>
						<Text style={styles.tabtitles}>Favourite Mixer</Text>
						{this.state.LOGINDATA.favourite_spirit ? (	
							<View style={{flexDirection:'row', marginTop:hp('0.5%')}}>
								<View style={styles.tabcontainer}><Text style={styles.tabtext}>Rum</Text></View>
								<View style={styles.tabcontainer}><Text style={styles.tabtext}>Beer</Text></View>
							</View>
						) : (<Text style={{color:'lightgray'}}>--x--</Text>)}
					</View>

					<View style={{marginTop:hp('1%')}}>
						<Text style={styles.tabtitles}>Favourite Finger Food</Text>
						{this.state.LOGINDATA.favourite_spirit ? (	
							<View style={{flexDirection:'row', marginTop:hp('0.5%')}}>
								<View style={styles.tabcontainer}><Text style={styles.tabtext}>Rum</Text></View>
								<View style={styles.tabcontainer}><Text style={styles.tabtext}>Beer</Text></View>
							</View>
						) : (<Text style={{color:'lightgray'}}>--x--</Text>)}
					</View>

					<View style={{marginTop:hp('1%')}}>
						<Text style={styles.tabtitles}>Favourite Smoke</Text>
						{this.state.LOGINDATA.favourite_spirit ? (	
							<View style={{flexDirection:'row', marginTop:hp('0.5%')}}>
								<View style={styles.tabcontainer}><Text style={styles.tabtext}>Rum</Text></View>
								<View style={styles.tabcontainer}><Text style={styles.tabtext}>Beer</Text></View>
							</View>
						) : (<Text style={{color:'lightgray'}}>--x--</Text>)}
					</View>

					<View style={{marginTop:hp('1%')}}>
						<Text style={styles.tabtitles}>Favourite Music</Text>
						{this.state.LOGINDATA.favourite_spirit ? (	
							<View style={{flexDirection:'row', marginTop:hp('0.5%')}}>
								<View style={styles.tabcontainer}><Text style={styles.tabtext}>Rum</Text></View>
								<View style={styles.tabcontainer}><Text style={styles.tabtext}>Beer</Text></View>
							</View>
						) : (<Text style={{color:'lightgray'}}>--x--</Text>)}
					</View>

				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: "white",
		alignItems:'center'
	},
	tabcontainer:{
		flexWrap:'wrap', 
		backgroundColor:'#e3e3e3',
		borderRadius:hp('1.5%'),
		height:hp('3.3%'), 
		marginRight:wp('2%')
	},
	tabtext:{
		paddingTop:3 ,
		fontSize:wp('2.7%'),
		marginHorizontal:wp('3%'),

	},
	tabtitles:{
		fontSize:wp('3.3%')
	}
  
});

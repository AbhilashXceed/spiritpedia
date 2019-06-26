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


  render() {
    return (
      <View style={styles.container}>
				<View style={{height:hp('37%')}}>
					<View style={{alignItems:'center',marginTop:hp('6%')}}>
						<Image style={{height:wp('30%'), width:wp('30%'), borderRadius:wp('15%')}}
						source={require('../../../assets/images/drawer.png')}/>
					</View>
					<View style={{marginTop:hp('1%')}}>
						<Text style={{textAlign:'center', fontSize:wp('4%')}}>Guruprasad Agavane</Text>
						<TouchableOpacity onPress={()=>this.props.navigation.navigate('Profiletwo')}>
							<View style={{marginTop:hp('1%')}}>
								<Text style={{textAlign:'center', fontSize:wp('3.5%'), color:'gray'}}>
									22.1k Followers
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
						aejlnfawkjnfa alwkfna lwknfla alwkfnawlk nfal awl kfnalwkfn kaw jnfka jwn fawkj aflk jawn fk ajwn alfk anw lf awn
						lawj nfla kwnfa wlkfn awlf knmawlk fnaw al f ka wm lkawnf awflk nawlfkaw awfalw knawlfk awlkfm awlkfnm aawf lkawnf
						ajwnfa kwjn fakwj awlfjnaw ljfnawll akwnfl awknl fkwamlfkm waldmaw akwnflawk aljfknalwjfnawlf awfknalwkfnawlfkn
						kanfkawjnfalwjfnawlkfnalwfk kjhbkjb jkhbi kjnk nkj nhik kjb nknhlkmnlikhnolik kjkjnkjnbkjb mjbikjhkjbkjbkj kjbkjh
						lak jwnda wlkf nalw kfna wlkf 
					</Text>
				</View>

{/* Array goes here */}

				<View style={{width:wp('83%')}}>
					<View style={{marginTop:hp('1%')}}>
						<Text style={styles.tabtitles}>Favourite Spirit</Text>
						<View style={{flexDirection:'row', marginTop:hp('0.5%')}}>
							<View style={styles.tabcontainer}><Text style={styles.tabtext}>Rum</Text></View>
							<View style={styles.tabcontainer}><Text style={styles.tabtext}>Beer</Text></View>
						</View>
					</View>

					<View style={{marginTop:hp('1%')}}>
						<Text style={styles.tabtitles}>Favourite Mixer</Text>
						<View style={{flexDirection:'row', marginTop:hp('0.5%')}}>
							<View style={styles.tabcontainer}><Text style={styles.tabtext}>Strong Soda</Text></View>
							<View style={styles.tabcontainer}><Text style={styles.tabtext}>Water</Text></View>
						</View>
					</View>

					<View style={{marginTop:hp('1%')}}>
						<Text style={styles.tabtitles}>Favourite Finger Food</Text>
						<View style={{flexDirection:'row', marginTop:hp('0.5%')}}>
							<View style={styles.tabcontainer}><Text style={styles.tabtext}>French Fries</Text></View>
							<View style={styles.tabcontainer}><Text style={styles.tabtext}>Spiced Groundnuts</Text></View>
						</View>
					</View>

					<View style={{marginTop:hp('1%')}}>
						<Text style={styles.tabtitles}>Favourite Smoke</Text>
						<View style={{flexDirection:'row', marginTop:hp('0.5%')}}>
							<View style={styles.tabcontainer}><Text style={styles.tabtext}>Cigar</Text></View>
							<View style={styles.tabcontainer}><Text style={styles.tabtext}>Flavoured Tobacco</Text></View>
						</View>
					</View>

					<View style={{marginTop:hp('1%')}}>
						<Text style={styles.tabtitles}>Favourite Music</Text>
						<View style={{flexDirection:'row', marginTop:hp('0.5%')}}>
							<View style={styles.tabcontainer}><Text style={styles.tabtext}>Pink Floyd</Text></View>
							<View style={styles.tabcontainer}><Text style={styles.tabtext}>Led Zeppelin</Text></View>
						</View>
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

{/* <Button
          onPress={() => this.props.navigation.navigate("Profiletwo")}
          title="go to followers"
        /> */}
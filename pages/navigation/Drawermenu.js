import React from 'react';
import {
    Dimensions,
		StyleSheet,
		View,
        Text,
        TouchableOpacity,
        Image,
        StatusBar
} from 'react-native';
import { Container, Content, Header, Body } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class Drawermenu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName: null,
            userImg: null,
           
        }
    }


    async componentDidMount(){
        const A = await AsyncStorage.getItem('A');
        const B = await AsyncStorage.getItem('B');
        const C = await AsyncStorage.getItem('C');
        let Adash = JSON.parse(A);
        let Bdash = JSON.parse(B);
        let Cdash = JSON.parse(C);
        this.setState({userName: Adash, userImg: Bdash});
        // console.warn(this.state.userImg);
        // console.log(this.state.userImg);

    }

     imagery = (namew) => {
        //  let names = namew
        //  console.log(names)
         if (namew == 0){
            return <Image source={require("../../android/app/icons/locate.png")} style={styles.icons}/> 
        } else if (namew == 1){
             return <Image source={require("../../android/app/icons/wallet.png")} style={styles.icons}/> 
        } else if (namew==2){
             return <Image source={require("../../android/app/icons/star.png")} style={styles.icons}/> 
        } else if (namew==3){             
             return <Image source={require("../../android/app/icons/share.png")} style={styles.icons}/> 
        } else if (namew==4){             
             return <Image source={require("../../android/app/icons/wallet.png")} style={styles.icons}/> 
        } else if (namew==5){             
             return <Image source={require("../../android/app/icons/headphones.png")} style={styles.icons}/>
        } else if (namew==6){             
             return <Image source={require("../../android/app/icons/question.png")} style={styles.icons}/> 
        } else if (namew==7){             
             return <Image source={require("../../android/app/icons/info.png")} style={styles.icons}/> 
        } else if (namew==8){
             return <Image source={require("../../android/app/icons/chat.png")} style={styles.icons}/> 
        } else if (namew==9){
             return <Image source={require("../../android/app/icons/setting.png")} style={styles.icons}/> 
        } else if (namew==10){
             return <Image source={require("../../android/app/icons/star.png")} style={styles.icons}/> 
        } 
    }

    navlink ( text, nav, name ){
        
        
        return(
            <TouchableOpacity style={{height: 40, flexDirection:'row', justifyContent:'center', alignItems:'center'}} onPress={()=>{this.props.navigation.navigate(nav)}}>
                {/* <Image source={require(name)} style={styles.icons}/> */}
                {this.imagery(name)}
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>

        )
    }
    
    render(){
        
        return(
            
            <Container>
            <StatusBar  barStyle="light-content" />

                <Header style={{ height: hp("30%"), backgroundColor: "white", flexDirection:'column', justifyContent:'center', alignItems:'center' }} androidStatusBarColor='#fdbd30'>
                    
                        <View >
                            <Image style={styles.Imgview} 
                            // source={{uri: this.state.userImg}}
                            source={require('../../android/app/images/drawer.png')}
                            />
                        </View>
                        <View style={{marginTop: 10, padding:6, width:wp("60%"), borderBottomColor: '#bfbfbf', borderBottomWidth:1}}>
                        {/* {this.state.userName} */}
                            <Text style={styles.title}>Hello!</Text>
                            <Text style={styles.title}>Rohit Supe (Beginner)</Text>
                        </View>
                   
                </Header>
                <Content style={{ backgroundColor: "white" }}>
                    {/* {this.navlink('Home', 'LandingTabNavigator')}
                    {this.navlink('Profile', 'profile')} */}
                    {this.navlink('Location', 'Location', 0)}
                    {this.navlink('My Transactions', 'Transactions', 1)}
                    {this.navlink('Whiskey Points', 'Points', 2)}
                    {this.navlink('Share App', 'Share', 3)}
                    {this.navlink('Refer and Earn!', 'Refer', 4)}
                    {this.navlink('Customer Support', 'Support', 5)}
                    {this.navlink("FAQ's", 'FAQ', 6)}
                    {this.navlink('About Us', 'About', 7)}
                    {this.navlink('Share Feedback', 'Feedback', 8)}
                    {this.navlink('Settings', 'Setting', 9)}
                    {this.navlink('Log Out', 'LogOut', 10)}
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#455a64',
    },
    link: {
        flex: 1,
        // color: 'white',
        fontWeight: '300',
        fontSize: 13, 
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left'
    },
    Imgview: {
        height: 90,
        width: 90,
        borderRadius: 45,
    },
    title:{
        fontSize: 15,
        color: 'black',
        textAlign:'center',
        margin:3
        // fontWeight: 'bold'
    },
    icons:{
        marginLeft:35,
        height: 13,
        width: 13,
    }
})
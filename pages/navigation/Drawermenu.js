import React from 'react';
import {
    Dimensions,
		StyleSheet,
		View,
        Text,
        TouchableOpacity,
        Image
} from 'react-native';
import { Container, Content, Header, Body } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';


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
        console.warn(this.state.userImg);
        console.log(this.state.userImg);

    }

    navlink ( text, nav ){
        return(
            <TouchableOpacity style={{height: 50}} onPress={()=>{this.props.navigation.navigate(nav)}}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>

        )
    }
    
    render(){
        
        return(
            <Container>
                <Header style={{ height: 100, backgroundColor: "#1c313a" }}>
                    <Body style={{flexDirection: 'row', }}>
                        <View>
                            <Image style={styles.Imgview} 
                            source={{uri: this.state.userImg}}/>
                        </View>
                        <View style={{paddingLeft: 15}}>
                            <Text style={styles.title}>{this.state.userName}</Text>
                        </View>
                    </Body>
                </Header>
                <Content style={{ backgroundColor: "#455a64" }}>
                    {this.navlink('Home', 'LandingTabNavigator')}
                    {this.navlink('Profile', 'profile')}
                    {this.navlink('Location', 'Location')}
                    {this.navlink('My Transactions', 'Transactions')}
                    {this.navlink('Whisky Points', 'Points')}
                    {this.navlink('Share App', 'Share')}
                    {this.navlink('Refer & Earn', 'Refer')}
                    {this.navlink('Customer Support', 'Support')}
                    {this.navlink('FAQ', 'FAQ')}
                    {this.navlink('About Us', 'About')}
                    {this.navlink('Share Feedback', 'Feedback')}
                    {this.navlink('Log Out', 'LogOut')}
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
        color: 'white',
        fontWeight: '300',
        fontSize: 15, 
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left'
    },
    Imgview: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    title:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})
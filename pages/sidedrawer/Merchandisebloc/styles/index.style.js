import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 0
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    slider: {
        marginTop: wp('2%'),
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: wp('2.2%'), // for custom animation
    },
    paginationContainer: {
        paddingVertical: wp('1%'),
    },
    paginationDot: {
        width: wp('2%'),
        height: wp('2%'),
        borderRadius: wp('1%'),
        marginHorizontal: 0,
    }
});
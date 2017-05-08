
const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  logoContainer: {
    flex: 1
    //marginTop: deviceHeight / 8,
    //marginBottom: 30
  },
  logo: {
    position: 'absolute',
    left: (Platform.OS === 'android') ? 40 : 50,
    top: (Platform.OS === 'android') ? 35 : 60,
    width: 280,
    height: 100
  },
  mmImage: {
    flex: 1,
    width: deviceWidth,
    //height: 200,
    resizeMode: 'contain'
  },
  engImage: {
    flex: 2,
    width: deviceWidth,
    //height: 200,
    resizeMode: 'contain'
  },
  text: {
    color: '#D8D8D8',
    bottom: 6
  }
};


import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, Left, Body, Right, IconNB } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { openDrawer, closeDrawer } from '../../actions/drawer';
//import { firebaseApp } from '../../firebase';

import styles from './styles';

const logo = require('../../../img/logo_dica.png');
const mmCardImage = require('../../../img/myanmar_flag.png');
const enCardImage = require('../../../img/english_flag.png');

const {
  popRoute
} = actions;

class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string
    })
  }

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }
  componentDidMount() {
    // var connectedRef = firebaseApp.database().ref(".info/connected");
    // connectedRef.on("value", function(snap) {
    //   if (snap.val() === true) {
    //     console.log("connected");
    //   } else {
    //     console.log("not connected");
    //   }
    // });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />

        </Header>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                {/*<Thumbnail source={logo} />*/}
                <Body>
                  <Text>မြန်မာ</Text>
                  <Text note>Laws, regulations and procedures for investment and company registration.</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <TouchableHighlight onPress={() => { Actions["myanmar"](); this.props.closeDrawer() }} style={styles.logoContainer}>        
              <Image style={{ resizeMode: 'cover', width: null, height: 160, flex: 1 }} source={mmCardImage} />
              </TouchableHighlight>
            </CardItem>            
          </Card>
          
          <Card style={styles.mb}>
            
            <CardItem>
              <Left>
                {/*<Thumbnail source={logo} />*/}
                <Body>
                  <Text>English</Text>
                  <Text note>Laws, regulations and procedures for investment and company registration.</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <TouchableHighlight onPress={() => { Actions["english"](); this.props.closeDrawer() }} style={styles.logoContainer}>        
              <Image style={{ resizeMode: 'cover', width: null, height: 160, flex: 1 }} source={enCardImage} />
              </TouchableHighlight>   
            </CardItem>  
                       
          </Card>
          
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
  routes: state.drawer.routes
});

export default connect(mapStateToProps, bindAction)(Home);

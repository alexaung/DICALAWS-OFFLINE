
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Card, CardItem, Text, ListItem, List } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';

//import { firebaseApp } from '../../firebase';

var RNFS = require('react-native-fs');

var data = require('../../dica-laws.json')

const {
    pushRoute
  } = actions;

class English extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string
    })
  }

  constructor(props) {
    super(props);
    
    this.state = {
      laws:data.enlaws.sort(function (a, b) {
                return parseInt(a.order) - parseInt(b.order);;
            })
    };
  
    //this.lawsRef = this.getRef().child('enlaws');
  }

  // getRef() {
  //   return firebaseApp.database().ref();
  // }

  //listenForLaws(lawsRef) {
    // lawsRef.on('value', (snap) => {

    //   // get children as an array
    //   var laws = [];
    //   snap.forEach((child) => {
    //     laws.push({
    //       title: child.val().title,
    //       url: child.val().url,
    //       id: child.val().id,
    //       type: child.val().type,
    //       date: child.val().date,
    //       _key: child.key
    //     });
    //   });

    //   this.setState({
    //     laws: laws
    //   });

    // });
  //}

  componentDidMount() {
    //this.listenForLaws(this.lawsRef);
  }

  pushRoute(route) {    
    //this.props.navigator.push({id: route, title1, year1});
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>English</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Right>

        </Header>

        <Content>
          <List
            dataArray={this.state.laws} renderRow={data =>
              <ListItem button onPress={() => { Actions["englishview"]({ title: data.title, url:data.url, id:data.id }); this.props.closeDrawer() }} >
                {/*<Text>{data.title}</Text>
                <Right>
                  <Icon name="arrow-forward" style={{ color: '#999' }} />
                </Right>*/}
                <Card style={styles.mb}>
                  <CardItem>
                    <Left>
                      {/*<Thumbnail source={logo} />*/}
                      <Body>
                        <Text style={styles.text}>{data.title}</Text>
                        {/*<Text note>{data.type}</Text>*/}
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem style={{ paddingVertical: 0 }}>
                    <Left>
                      {/*<Icon active name="thumbs-up" />*/}
                      
                      <Button iconLeft transparent>
                        <Icon active name="book" />
                        <Text note> {data.type}</Text>
                      </Button>
                    </Left>
                    
                    <Right>
                      {/*<Icon active name="chatbubbles" />*/}
                      <Button iconLeft transparent>
                        <Icon active name="clock" />
                        <Text note> {data.date}</Text>
                      </Button>
                        
                      
                    </Right>
                  </CardItem>

                  {/*<CardItem cardBody>
                    <TouchableHighlight onPress={() => { Actions["myanmar"](); this.props.closeDrawer() }} style={styles.logoContainer}>        
                    <Image style={{ resizeMode: 'cover', width: null, height: 160, flex: 1 }} source={mmCardImage} />
                    </TouchableHighlight>
                  </CardItem>            */}
                </Card>
              </ListItem>
        }
          />

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
});

export default connect(mapStateToProps, bindAction)(English);

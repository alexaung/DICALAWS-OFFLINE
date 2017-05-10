
import React, { Component } from 'react';
import { Clipboard, ToastAndroid, AlertIOS, Platform, WebView } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

import Share, {ShareSheet, Button as ShareButton} from 'react-native-share';
//import PDFView from 'react-native-pdf-view';
//import Pdf from 'react-native-pdf';

//var RNFS = require('react-native-fs');
//var filepath = require('../../enfilepath.js')

const {
    popRoute
  } = actions;

class EnglishView extends Component {  // eslint-disable-line
  constructor(props) {
    super(props);
    
    this.state = {
            page: 1,
            pageCount: 1,
            filepath: "./pdf/en/"+this.props.id+".pdf"
        };
        //this.pdfView = null;
  }

  static propTypes = {
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string
    })
  }

  componentDidMount() {
  
  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }  

  render() {
    let shareOptions = {
      title: "DICA LAWS",
      message: this.props.title,
      url: "file:///"+ this.state.filepath,
      //url: this.props.url.substr(0, this.props.url.lastIndexOf('/')) +"/" + this.props.id + ".pdf",
      subject: this.props.title //  for email 
    };
    
    let source = {uri: this.state.filepath};
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => Share.open(shareOptions)}>
              <Icon name="share" />
            </Button>
          </Right>

        </Header> 

        <WebView source={source} />
      
      </Container>
      
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});



export default connect(mapStateToProps, bindAction)(EnglishView);
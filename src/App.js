import React,{Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';
import Content from './components/Content';

export default class App extends Component{
  state = { loggedIn: false };

  componentDidMount(){
    const config = {
      apiKey: 'AIzaSyBXAD55lTSQJUwCmNQFfCIO7DsOKo-N7dU',
      authDomain: 'auth-498f5.firebaseapp.com',
      databaseURL: 'https://auth-498f5.firebaseio.com',
      projectId: 'auth-498f5',
      storageBucket: 'auth-498f5.appspot.com',
      messagingSenderId: '362008641545'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Header headerText="Content"/>
            <Content/>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render(){
    return(
      <View >
        {this.renderContent()}
      </View>
    );
  }
}

import React, { Component } from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection,Input,Spinner } from './common';

class LoginForm extends Component {
  state = {
    email : ''
    ,password : ''
    ,error : ''
    ,loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({error : '',loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((signInError)=>{
        const signInErrorDetail = `code: ${signInError.code}
        message: ${signInError.message}`;
        console.log(signInErrorDetail);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'ไม่สามารถเข้าสู่ระบบได้ !!!', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button textBtn = "Log In" onPress={this.onButtonPress.bind(this)}/>
    );
  }

  render() {
    return (
      <View>
        <Card>
        <Text style={styles.textTitle}> Login IO-Tech</Text>
          <CardSection>
            <Input
              placeholder="user@gmail.com"
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              placeholder="Password"
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}
const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red'
  },
  textTitle:{
      fontSize : 30,
      color : '#803300',
      fontWeight: 'bold',
      alignSelf: 'center',
  },
  
};

export default LoginForm;

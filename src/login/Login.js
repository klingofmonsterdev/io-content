/**
 * Created by monsterdev on 6/10/17.
 */
import React, { Component } from 'react';
import { StyleSheet,Text,View,TextInput,TouchableOpacity,Alert, Button} from 'react-native';
import { Container, Content, Form, Input, Item } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Login extends Component {
    // constructor(props){
    //   super(props);
    //   this.state = {
    //     user : '',
    //     pass : ''
    //   }
    // }

    _handlePress() {
        console.log(this.state.user);
        console.log(this.state.pass);

        Alert.alert(
          'Alert Title',
          this.state.user,
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
     }

    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: '#f1c40f'}}>
                    <Grid>
                        <Row style={{ height: 250 }}>
                            <View style={styles.textContainer}>
                                <Text style={styles.textTitle}> IO-Tech Content</Text>
                            </View>
                        </Row>
                        <Row style={{ height: 250 }}>
                            <Container>
                                <Content>
                                    <Form>
                                        <Item>
                                            <Input
                                              placeholder="Username"
                                              onChangeText={(Text) =>this.setState({user:Text})}
                                            />
                                        </Item>
                                        <Item>
                                            <Input
                                              placeholder="Password"
                                              secureTextEntry="True"
                                              onChangeText={(Text)=>this.setState({pass:Text})}
                                             />
                                        </Item>
                                        <View style={styles.box}>

                                          <Button
                                            style={styles.buttonContainer}
                                            onPress={() => this._handlePress()}
                                            title="Login"
                                            color="#841584"
                                            accessibilityLabel="Learn more about this purple button"
                                          />
                                        </View>
                                    </Form>
                                </Content>
                            </Container>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        padding:20
    },
    textContainer:{
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textTitle:{
        fontSize : 30,
        color : '#803300',
        fontWeight: 'bold'
    },
    buttonContainer:{
      backgroundColor: '#f39c12',
      paddingVertical: 10,
    },
    buttontext:{
      textAlign:'center',
      color:'#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold'
    }
});

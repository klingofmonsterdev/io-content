import React from 'react';
import {View,Image} from 'react-native';

const Banner = () =>{
  return (
    <View style={styles.containerStyle}>
      <Image source={require('../image/banner.png')}/>
    </View>
  );
}

const styles = {
    containerStyle:{
      backgroundColor : '#FFFF33',
      //marginVertical : 10,
      height : 130
    }
}

export default Banner;

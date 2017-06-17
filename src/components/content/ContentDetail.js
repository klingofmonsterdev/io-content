import React,{ PropTypes } from 'react';
import {View,Text,Image,Linking} from 'react-native';
import DetailSection from './DetailSection';
import Button from './Button';
const ContentDetail = ({album}) =>{
  const { title, artist, thumbnail_image,url } = album;
  const { containerText ,thumbnailStyle,textTitle,containerButton} = styles;
    return(
      <View>
        <DetailSection>
          <View>
            <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style={containerText}>
            <Text style={textTitle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </DetailSection>
        <View>
          <Button onPress={() => Linking.openURL(url)}>
              Go to link {title}
          </Button>
        </View>
      </View>
    );
}

const styles = {
  containerText:{
    flexDirection: 'column',
    justifyContent : 'space-around'
  },
  containerButton:{
    marginLeft : 60
  },
  textTitle:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 10
  }
}
ContentDetail.PropTypes = {
  album: PropTypes.object.isRequired
};

export default ContentDetail;

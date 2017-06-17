import React ,{Component} from 'react';
import {ScrollView,Text} from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import ContentBanner from './content/ContentBanner';
import ContentDetail from './content/ContentDetail';
import { Button, CardSection} from './common';

export default class Content extends Component {
  state = { albums: [] }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data}));
    // axios.get('https://www.publishidea.com/charin/data.json')
    //   .then(response => this.setState({ albums: response.data}));
  }

  renderAlbums(){
    return this.state.albums.map(album =>
      <ContentDetail key={album.title} album={album} />
    );
  }

  render(){
    return(
      <ScrollView>
        <ContentBanner />
        <CardSection>
          <Button textBtn = "Log Out" onPress={() => firebase.auth().signOut()} />
        </CardSection>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

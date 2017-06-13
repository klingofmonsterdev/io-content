import React ,{Component} from 'react';
import {ScrollView,Text} from 'react-native';
import axios from 'axios';
import ContentBanner from './ContentBanner';
import ContentDetail from './ContentDetail';


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

    console.log(this.state);

    return(
      <ScrollView>
        <ContentBanner />
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

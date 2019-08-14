import React, { Component } from 'react';
import './App.css';
import Results from './results';
//import Login from './login'


import SpotifyWebApi from 'spotify-web-api-js';
const  spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor(){
    super();
    /*const params = this.getHashParams();

    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }*/
    this.state = {
      //loggedIn: token ? true : false,
      showResults: false,
      click :false,
      user:'',
      userLogin:false,
      nowPlaying: { 
        name: 'Not Checked', 
        albumArt: '' ,
        artist : [] ,
        artisInfo: [],
        uri : '' ,
        albumName: 'Not Checked',
    
      }
    }
    this.showResultsFunction = this.showResultsFunction.bind(this);
    
  }

  /*getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
    return hashParams;
    }*/

    // This will use a library
    getNowPlaying() {
      spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          click: true,
          nowPlaying: {
            name: response.item.name,
            albumArt: response.item.album.images[1].url,
            artist:  response.item.artists.map(name => name.name + " "),  //response.item.artists[0].name, 
            artistInfo: response.item.artists.map(info => info.external_urls.spotify),
            uri:  response.item.uri,
            albumName: response.item.album.name,
          }
        });
        console.log(response);
      })
    }

    showResultsFunction(){
      this.setState({
        showResults : true
      }); 
    }

  


    render(){
      return (
        <div className="App">
          {/*<a href='http://localhost:8888'className="btn btn-danger"> Login to Spotify </a> */}
     
          <br/>



          {this.props.loggedIn &&
            <button className="btn btn-info click" onClick={() => this.getNowPlaying()}>
              Check Now Playing
            </button>  
          }

        
          <div className="result"> Now playing: {this.state.nowPlaying.name}</div>
          <div className="imgDiv"><img className="imgAlbum" alt={this.state.nowPlaying.albumArt} src={this.state.nowPlaying.albumArt} sytle={{width:150}}/></div>
          

        {this.state.click ? <Results artist= {this.state.nowPlaying.artist} artistInfo={this.state.nowPlaying.artistInfo} 
        uri={this.state.nowPlaying.uri} albumName={this.state.nowPlaying.albumName}/ > : null}
        
        </div>

      );
    }
}

export default App;

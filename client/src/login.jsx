import React, { Component } from 'react';
import App from './App';

import SpotifyWebApi from 'spotify-web-api-js';
const  spotifyApi = new SpotifyWebApi();


class Login extends Component {
    
    constructor(){
        super();
        const params = this.getHashParams();
    
        const token = params.access_token;
        if (token) {
          spotifyApi.setAccessToken(token);
        }
        this.state = {
          loggedIn: token ? true : false,        
          }
        
        this.user= this.user.bind(this);
      }

      getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
          }
        return hashParams;
        }


        user(){
            spotifyApi.getMe()
            .then((response) => {
            this.setState({
                user: response.display_name
            });
    
            })
            console.log(this.state.user);
        }

    
    render() { 
        return ( 
            <div>
            <a href='http://localhost:8888'className="btn btn-danger"> Login to Spotify </a> 
        
            {/*this.state.loggedIn && this.user()*/} 
            {this.state.loggedIn && <App loggedIn={this.state.loggedIn}/>}
            </div>
    
         );
    }
}
 
export default Login;
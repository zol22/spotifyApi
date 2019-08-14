import React, { Component } from 'react';

class  Results extends Component {

    constructor(){
        super();
        this.uri = this.uri.bind(this);
    }

    uri(){
        window.open('https://embed.spotify.com/?uri=' +  this.props.uri + '&view=coverart');
      }

    render() { 

    
        return (

            <div> 

                <div className="result"> Artists:
                    {this.props.artistInfo.map((value,index) => <a key={index} className="linkArtist" href={value} rel="noopener noreferrer" target="_blank"> {this.props.artist[index]}</a>)}
                </div>
                
                
              
                <div className="result">Album Name: {this.props.albumName}</div>

                <div className="result">
                    <button onClick={this.uri} className="btn btn-outline-danger button">
                        Click to hear Music
                    </button>
                </div>
            </div> 

        );
    }
}
 
export default Results;
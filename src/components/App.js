import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
class App extends React.Component {
    state = {videos: [] , selectedVideo: null };
    //callback componentd
  

    onTermSubmit = async (term)=>{
        const response = await youtube.get('/search' , {
            params: {
                q: term
            }
        });

        //console.log(response);

        this.setState({videos: response.data.items});
    };
    onVideoSelect = (video) =>{
        console.log('From the app',video);
    }
    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit = {this.onTermSubmit} />
            
            <VideoList onVideoSelect = {this.onVideoSelect} videos ={ this.state.videos} />
        </div>);
    }
}
export default App;

//AIzaSyBRh67emPOrwheJJaznIHwzwyuk4VXrKsw
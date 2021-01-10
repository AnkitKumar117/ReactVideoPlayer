import axios from 'axios';


const KEY = 'AIzaSyBRh67emPOrwheJJaznIHwzwyuk4VXrKsw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        
    }
});
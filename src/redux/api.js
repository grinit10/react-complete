import axios from 'axios';

const KEY =
    '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = `https://api.unsplash.com/photos/`;

export default class imagesAPI {
    static fetchImages = page => axios.get(`${URL}${KEY}&per_page=3&page=${page}`);
}
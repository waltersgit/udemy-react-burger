/**
 * Created by peter on 2018/3/28.
 */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1c42f.firebaseio.com/'
})

export default instance;
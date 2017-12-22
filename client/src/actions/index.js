import axios from 'axios';
import { FETCH_USER } from './actionTypes'

const fetchUser = () => {
    return () => {
        axios.get('/api/checklogin')
            .then(res => dispatch({ type: FETCH_USER, payload: res}))
    }
}
import axios from 'axios';

// const BackEnd_URL = 'http://localhost:3000';
const BackEnd_URL = process.env.REACT_APP_BackEnd_URL || 'http://localhost:3000';
export const login = ({ email, password }) => {
    return axios.post(`${BackEnd_URL}/api/users/login`, { email, password }).then(res => res.data);

}

export const getUserInbox = () => {

    return axios.get(`${BackEnd_URL}/api/users/profile/inbox`, { headers: { authorization: `Bearer ${localStorage.getItem('userToken')}` } })
        .then(res => res.data);

}

export const getUserSent = () => {

    return axios.get(`${BackEnd_URL}/api/users/profile/sent`, { headers: { authorization: `Bearer ${localStorage.getItem('userToken')}` } })
        .then(res => res.data);

}
import axios from 'axios';

const BackEnd_URL = process.env.REACT_APP_BackEnd_URL || 'http://localhost:3000';
export const getEmailById = (mailId) => {
    return axios.post(`${BackEnd_URL}/api/messages/${mailId}`)
        .then(res => res.data);

}

export const AddEmail = ({ to, from, body }) => {
    return axios.post(`${BackEnd_URL}/api/messages/add`, { to, from, body })
        .then(res => res.data);
}

export const DeleteEmail = (emailId) => {
    return axios.delete(`${BackEnd_URL}/api/messages/${emailId}`)
        .then(res => res.data);
}


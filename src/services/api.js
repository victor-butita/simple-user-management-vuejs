import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => axios.get(API_URL);
export const createUSer = (user) =>{

    const formData = new FormData();
    formData.append('name',user.name);
    formData.append('email',user.email);
    formData.append('image',user.image);

    return axios.post(API_URL,formData, {
        headers:{
            'Content-Type':'multipart/form-data',
        },
    });
};

export const deleteUser = (userId) => axios.delete(`${API_URL}/${userId}`);

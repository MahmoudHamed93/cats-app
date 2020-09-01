import axios from 'axios';

export const getCats = (page,limit) => {
  return axios(`https://api.thecatapi.com/v1/breeds?page=${page}&limit=${limit}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      return res.data
    })
    .catch(e => {
      return Promise.reject(e);
    });
};

export const catSearch = (page,limit,name) => {
  return axios(`https://api.thecatapi.com/v1/breeds/search?page=${page}&limit=${limit}&name=${name}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      return res.data
    })
    .catch(e => {
      return Promise.reject(e);
    });
};

export const catDetails = (id) => {
  return axios(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      return res.data
    })
    .catch(e => {
      return Promise.reject(e);
    });
};
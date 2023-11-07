// api.js
import axios from 'axios';
// 
const api = axios.create({
  baseURL: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '00189b5348msh3428e24796c1a02p187579jsne87b82a7c59f',
    'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
  },
});
// 
export const downloadInstagramVideo = async (url) => {
  try {
    const response = await api.get('/index', {
      params: {
        url: url,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
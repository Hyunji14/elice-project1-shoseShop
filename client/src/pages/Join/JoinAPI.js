import axios from 'axios';

// 유저정보 보내기 (회원가입)
export const postUser = async ({ name, password, email }) => {
  try {
    const newItem = { name, password, email };
    const response = await axios.post('/api/auth/join', newItem, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

import axios from 'axios';

export const getData = async (id: number) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    console.log(res.data);

    return res.data;
  } catch (error) {
    return 'error';
  }
};

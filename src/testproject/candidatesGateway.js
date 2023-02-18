import { tokenUrl, sendFormUrl } from '../env';
let tokenPost = null;

export const fetchToken = async () => {
  try {
    const response = await fetch(tokenUrl);
    const data = await response.json();
    tokenPost = data.token;
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
const fetchCandidatesList = async (urlName) => {
  try {
    const response = await fetch(urlName);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default fetchCandidatesList;

export const fetchPostFofm = async (data) => {
  try {
    const response = await fetch(sendFormUrl, {
      method: 'POST',
      body: data,
      headers: {
        Token: tokenPost
      }
    });
    const res = await response.json();

    return res;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

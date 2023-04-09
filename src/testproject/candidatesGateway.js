// import { tokenUrl, sendFormUrl } from '../../env';
let tokenPost = null;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const SEND_FORM_URL = process.env.REACT_APP_SEND_FORM_URL;
const TOKEN_URL = process.env.REACT_APP_TOKEN_URL;
export const fetchToken = async () => {
  try {
    const response = await fetch(TOKEN_URL);
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
    const response = await fetch(SEND_FORM_URL, {
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

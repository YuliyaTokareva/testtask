export const fetchToken = () => {
  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      // proccess network errors
      console.log(error);
    });
};
const fetchCandidatesList = (urlName) =>
  fetch(urlName)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Faild to get');
      }
      // eslint-disable-next-line
      return res.json();
    })

    .catch((err) => {
      console.log(err);
    });

export default fetchCandidatesList;

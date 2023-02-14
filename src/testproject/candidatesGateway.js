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

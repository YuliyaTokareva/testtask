// export const getFilteredList = (positionsList) => {
//   return positionsList.map((el) => {
//     if ('name' in el) {
//       return el.name;
//     }
//   });
// };
// fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
//   .then(function (response) { return response.json(); })
//   .then(function (data) { console.log(data); })
//   .catch(function (error) {
//     // proccess network errors
//      console.log(error);
//   })

// var formData = new FormData();
// // file from input type='file'
// const fileField = document.querySelector('input[type="file"]');
// formData.append('position_id', 2);
// formData.append('name', 'Jhon');
// formData.append('email', 'Jhon@gmail.com');
// formData.append('phone', '+380955388485');
// formData.append('photo', fileField.files[0]);
// fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
//   {
//     method: 'POST',
//     body: formData,
//     headers: {
//       'Token': token, // get token with GET api/v1/token method
//     },
//   })
//   .then(function (response) { return response.json(); })
//   .then(function (data) {
//     console.log(data);
//     if (data.success) { // process success response
//     }
//       else {  } })
//   .catch(function (error) { // proccess network errors
//   });

// // First request const firstRequest = async () => { const response = await fetch('url'); const json = await response.json(); // do something with the response }

// // Second request const secondRequest = async () => { const response = await fetch('url'); const json = await response.json(); // do something with the response }

// // Execute the requests firstRequest(); secondRequest();

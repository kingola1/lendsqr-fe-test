import axios from "axios";

export const instance = axios.create({
    baseURL: `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`,
    method: 'GET'
});


// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });
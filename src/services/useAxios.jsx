import axios from 'axios';

const vercelToken = '8w5ijnzp9gkm1NAMg1EPiLtE'; //Replace with your token
const apiEndPt = 'https://api.vercel.com/v9/projects';

let config = {
  method: 'get',
  url: apiEndPt,
  headers: {
    Authorization: 'Bearer ' + vercelToken,
  },
};
let results = [];

export const fetchVercelProjects = () => {
  return new Promise((resolve, reject) => {
    axios(config).then(function (response) {
      if (results.length === 0) {
        results.push(...response.data.projects);
        resolve(results);
      }
    })
      .catch(function (error) {
        reject(error)
      });
  })
};

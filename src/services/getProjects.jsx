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


export const fetchVercelProjects = () => {
  return new Promise((resolve, reject) => {
    axios(config).then(function (response) {
      resolve(response.data.projects)
    })
      .catch(function (error) {
        reject(error)
      });
  })
};

const axios = require("axios");

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Ejemplo funcional de un adaptador hipotético
// const adapter = {
//   get: (url) => instance.get(url),
//   post: (url, body) => instance.post(url, body),
//   put: (url, body) => instance.put(url, body),
//   delete: (url) => instance.delete(url),
// };
// module.exports = adapter;

module.exports = instance;

const { default: axios } = require("axios");

export default axios.create({
  baseURL: "http://localhost:8081/",
});

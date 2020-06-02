import axios from "axios";

const api_git = axios.create({
  baseURL: "https://api.github.com/repos/madeuss",
});

export default api_git;

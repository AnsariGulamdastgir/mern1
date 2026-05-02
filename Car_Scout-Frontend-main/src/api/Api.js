import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3800"
});

export default API;




// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:3800"
// });

// export default API;
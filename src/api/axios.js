import axios from "axios";

const api = axios.create({
  baseURL: "https://rigby-backend-deployment-824i.onrender.com",
  withCredentials: true, // send cookies automatically
});

// Interceptor: if backend returns 401 → redirect to login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login"; // instead of navigate (works globally)
    }
    return Promise.reject(error);
  }
);

export default api;

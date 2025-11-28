// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://bookshare-backend-ca7c.onrender.com/api",
});

// Automatically attach Firebase token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;

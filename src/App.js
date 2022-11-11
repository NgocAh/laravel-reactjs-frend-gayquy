import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./User/component/Layout";
import axios from "axios";
axios.defaults.baseURL = "http://localhost/laravel-react-backend/public";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
}
export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./Admin/layouts/MasterLayout";
import Layout from "./User/component/Layout";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />} />
      <Route path="/admin/*" element={<MasterLayout />}/>
    </Routes>
  );
}
export default App;

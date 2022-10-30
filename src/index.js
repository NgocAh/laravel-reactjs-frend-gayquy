import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import { store } from './User/redux/store'
//một component của react được cung cấp bởi thư viện react-redux
import { Provider } from 'react-redux'


import { BrowserRouter as Router } from "react-router-dom"
import './User/assets/boxicons-2.0.7/css/boxicons.min.css'
import './User/sass/index.scss'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';


// import { GoogleOAuthProvider } from '@react-oauth/google';


import store from './store';
import App from './App';
import "./App.css"


// const router = createBrowserRouter(routeObject);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="569553056609-ifbb1uv071bd4hp87mjcatvmlcca3pqk.apps.googleusercontent.com"> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>
);


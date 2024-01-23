import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import fetchIntercept from 'fetch-intercept'
// fetchIntercept.register({
//   request: async function (url: any, config: any) {
//     console.log('request was intercepted!')
//     if (typeof url === 'object' && url !== null) {
//       return [url]
//     }
//     const accessToken = 'HELLOWORD'
//     const headers = config.headers || new Headers();
//     headers.set('Authorization', `Bearer ${accessToken}`)
//     config.headers = headers;
//     return [url, config]
//   },

// } as any)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <App />

);



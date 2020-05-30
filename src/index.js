import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import DatApp from './DatApp';
import IPFSApp from "./IPFSApp";
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <DatApp />
//   </React.StrictMode>,
//   document.getElementById('dat-root')
// );

ReactDOM.render(
  <React.StrictMode>
    <IPFSApp />
  </React.StrictMode>,
  document.getElementById('ipfs-root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

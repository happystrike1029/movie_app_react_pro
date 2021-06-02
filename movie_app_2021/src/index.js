import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/*  StrictMode 는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구 */
ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


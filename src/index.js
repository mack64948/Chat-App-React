import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import ChatApp from './components/ChatApp';
import typography from './utils/typography';

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: #BDA5AD;
    font-family: ${typography.generalFontFamily};
  }

  body{
    margin: 0;
    padding: 0;
  }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ChatApp />
  </React.StrictMode>
);

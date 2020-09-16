import React from 'react';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Montserrat:ital,wght@0,400;0,500;1,400;1,500&display=swap');

        body {
          background-color: #fff;
          color: #000;
          font-size: 16px;
          font-family: 'Montserrat', sans-serif;
        }
        h1 {
          font-family: 'Lora', serif;
        }
      `}
    />
    <header></header>
    <main>{children}</main>
  </>
);

export default Layout;

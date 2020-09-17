import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';
import useSiteMetadata from '../hooks/metadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Montserrat:ital,wght@0,400;0,500;1,400;1,500&display=swap');

          body {
            background-color: #fff;
            color: #000;
            font-size: 16px;
            font-family: 'Montserrat', sans-serif;
            margin: 1.4rem;
            max-width: 90vw;
          }
          h1 {
            font-family: 'Lora', serif;
          }
        `}
      />

      <Helmet>
        <html lang="en-us" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <main> {children} </main>
    </>
  );
};

export default Layout;

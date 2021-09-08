import React from 'react';
import Head from 'next/head'
export const Layout = (Component) => {
  return (props) => {
    <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="../public/css/custom.css" />
    </Head>
    </div> 

    return <Component {...props} />;
  };
};
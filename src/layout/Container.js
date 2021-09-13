import React from "react";
import Header from "../header/Header";
import Head from "next/head";
import Sidebar from "../sidebar/Sidebar";

const Layout = (props) => {
  return (
    <>
      <div className="global-wrapper">
        <Head>
          <title>Create Next App</title>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/custom.css" />
        </Head>
        <Header />
        <Sidebar />
        {props.children}
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="scripts/custom-script.js"></script>
    </>
  );
};
export default Layout;

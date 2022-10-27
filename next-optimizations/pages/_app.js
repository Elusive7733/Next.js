import "../styles/globals.css";
import { Fragment } from "react";
import Head from "next/head";

// This file is the root component inside the body section of your HTML document
function MyApp({ Component, pageProps }) {
  //Next.js Automatically merges Head components that are used in child component
  //Next.js solves merge conflicts by choosing the last element
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

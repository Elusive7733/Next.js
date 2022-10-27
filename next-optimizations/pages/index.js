import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Optimizations</title>
        <meta
          // This name = "description" is a meta tag that is used by search engine crawlers find the description of a web page.
          name="description"
          content="Next.js Optimizations like adding meta data ect"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        <h1>Welcome to Next.js Optimizations</h1>
      </main>
    </div>
  );
}

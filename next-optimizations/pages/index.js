import Head from "next/head";
import Image from "next/image"

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

      {/* This speical Image component provided by Next.js that generates optimized images on the fly and caches the images for similar request */}
      {/* This image is also optimized for Operating Systems and Device Sizes */}
      <Image
        src="/favicon.ico"
        alt="Text"
        width={340}
        height={340}
      />
      {/* This width and Height here are the values we need for this image (values are in pixels) */}
    </div>
  );
}

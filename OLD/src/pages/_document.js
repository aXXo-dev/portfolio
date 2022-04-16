import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/*Open Graph Tags*/}
          <meta property="og:title" content="aXXo-dev" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://example.com/" />
          <meta property="og:description" content="Welcome to my portfolio!" />
          {/*Traditional Tags*/}
          <meta title="aXXo-dev" />
          <meta name="description" content="Welcome to my portfolio!" />
          <meta name="theme-color" content="#fff8f3" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="overlay" className="text-white z-40">
            <div className="bg-black black"></div>
            <div className="bg-black black"></div>
            <div className="bg-black black"></div>
          </div>
        </body>
      </Html>
    );
  }
}

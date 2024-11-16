import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-B4gt1jrGC7Jh4AgRrGh4WmXIlmj0t0f5eb/uj0+ceJlWzX1ylRr8kXKlN0NVi7F5"
          crossOrigin="anonymous"
        />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

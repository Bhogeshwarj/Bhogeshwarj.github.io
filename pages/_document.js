import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html
        lang="en"
        className="scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <Head>
          <meta
            name="description"
            content="Bhogeshwar Jadhav — Full Stack Developer from Pune, India. Building scalable web and mobile applications with Next.js, Node.js, React Native, and AWS."
          />

          <meta
            name="keywords"
            content="Bhogeshwar Jadhav, Bhogeshwarj, Full Stack Developer, Next.js, React Native, Node.js, Pune, Portfolio"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="Bhogeshwar Jadhav" />
          <meta name="theme-color" content="#000000" />

          <meta property="twitter:image" content="/logo.png" />
          <meta
            property="twitter:title"
            content="Bhogeshwar Jadhav | Full Stack Developer"
          ></meta>
          <meta
            property="twitter:description"
            content="Bhogeshwar Jadhav — Full Stack Developer from Pune, India. Specializing in Next.js, Node.js, React Native, and AWS."
          ></meta>
          <meta name="msapplication-navbutton-color" content="#000000" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#000000"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-TileImage" content="/logo.png" />
          <meta name="application-name" content="Bhogeshwar Jadhav" />
          <meta name="msapplication-tooltip" content="Bhogeshwar Jadhav" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="msapplication-task" content="name=Home;action-uri=/" />
          <meta name="msapplication-square70x70logo" content="/logo.png" />
          <meta name="msapplication-square150x150logo" content="/logo.png" />
          <meta name="msapplication-wide310x150logo" content="/logo.png" />
          <meta name="msapplication-square310x310logo" content="/logo.png" />

          <meta name="twitter:card" content="summary" />
          <meta property="og:title" content="Bhogeshwar Jadhav" />
          <meta
            property="og:description"
            content="Bhogeshwar Jadhav — Full Stack Developer from Pune, India. Building scalable web and mobile applications with Next.js, Node.js, React Native, and AWS."
          />
          <meta property="og:image" content="/logo.png" />
          <meta property="og:site_name" content="Bhogeshwar Jadhav" />
          <meta property="og:locale" content="en_US" />

          <link rel="icon" href="/logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Libre+Barcode+39+Text&family=Megrim&family=Rum+Raisin&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

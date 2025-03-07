// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Adiciona o script do Intercom */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.intercomSettings = {
                  app_id: 'wo0haiuj' // Substitua pelo seu app_id
                };
              `,
            }}
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

export default MyDocument;

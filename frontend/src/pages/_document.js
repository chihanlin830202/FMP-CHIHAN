import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';

import createEmotionCache from '../utils/createEmotionCache';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link href='/images/favicon.ico' rel='shortcut icon' type='image/x-icon' />
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap" 
                        rel="stylesheet"
                    />
                    {this.props.emotionStyleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// MyDocument.getInitialProps = async (ctx) => {
//     const originalRenderPage = ctx.renderPage;
//     const cache = createEmotionCache();
//     const { extractCriticalToChunks } = createEmotionServer(cache);
  
//     ctx.renderPage = () =>
//         originalRenderPage({
//             enhanceApp: (App) =>
//                 function EnhanceApp(props) {
//                     return <App emotionCache={cache} {...props} />;
//                 },
//         });
  
//     const initialProps = await Document.getInitialProps(ctx);
//     const emotionStyles = extractCriticalToChunks(initialProps.html);
//     const emotionStyleTags = emotionStyles.styles.map((style) => (
//         <style
//             data-emotion={`${style.key} ${style.ids.join(' ')}`}
//             key={style.key}
//             dangerouslySetInnerHTML={{ __html: style.css }}
//         />
//     ));
  
//     return {
//         ...initialProps,
//         styles: [
//             ...React.Children.toArray(initialProps.styles), 
//             ...emotionStyleTags
//         ],
//     };
// };
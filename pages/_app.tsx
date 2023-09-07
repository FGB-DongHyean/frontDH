import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
// == react index.js

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);

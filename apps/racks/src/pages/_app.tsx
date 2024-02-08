import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '../../../../packages/ui/utils/src/globals.css';
import { Layout } from '../components/layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RACKS</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;

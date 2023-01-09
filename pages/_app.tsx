import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default trpc.withTRPC(MyApp);
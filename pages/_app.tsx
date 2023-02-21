import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
    } else {
      router.push('/login');
    }
  });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

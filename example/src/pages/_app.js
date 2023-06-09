import { useState, createContext } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userContextValue = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </UserContext.Provider>
  );
}

export default MyApp;

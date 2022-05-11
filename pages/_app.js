import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

// Couldn't use process.env inside <MoralisProvider> on Heroku
const appId = process.env.NEXT_PUBLIC_APP_ID;
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={appId}
      serverUrl={serverUrl}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}
export default MyApp;
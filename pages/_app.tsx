import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import '../styles/index.css';
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh] " >

        <Navbar />
        <div className="flex gap-6 md:gap-20  ">
          
          <div className="ml-10 xl:ml-0 mt-4 flex gap-10 flex-col overflow-auto h-[88vh] videos flex-1">
            <Component {...pageProps} />
          </div>
          <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
            <Sidebar />
          </div>
        </div>

      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;

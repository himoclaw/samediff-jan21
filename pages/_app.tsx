import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
import '../styles/nprogress.css';
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Configure NProgress options
    NProgress.configure({ showSpinner: false });

    const handleStart = () => {
      NProgress.start();
    };

    const handleComplete = () => {
      NProgress.done();
    };

    // Bind the NProgress start and stop to the router events
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // Clean up the router event listeners
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        {/* Favicon link */}
        <link rel="icon" href="/sd-fav.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

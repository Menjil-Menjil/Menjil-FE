import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/component/layout";
import {Prompt} from "next/font/google";
import React from "react";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--prompt",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          /* font */
          --logo-font: ${prompt.style.fontFamily};
          /* color */
          --theme-color: #E68C23;
          --input-placeholder: #AFAFAF;
          --highlighted-element: #FF8A00;
          --selected-element: #FBBC053B;
        }
      `}</style>
      <Head>
        <title>맨질맨질</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
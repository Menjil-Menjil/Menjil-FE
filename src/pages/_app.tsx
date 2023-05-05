import type { AppProps } from "next/app";
import Layout from "@/component/layout";
import {Prompt} from "next/font/google";

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
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
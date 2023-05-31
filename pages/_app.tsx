import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Layout";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

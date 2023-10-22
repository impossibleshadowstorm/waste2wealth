import { SearchContextProvider } from "@/context/search";
import "@/styles/globals.css";
import Layout from "@/utils/layout";

export default function App({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <Layout title={"Waste 2 Wealth"}>
        <Component {...pageProps} />
      </Layout>
    </SearchContextProvider>
  );
}

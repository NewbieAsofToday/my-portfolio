import Layout from "../layout/index";
import "../styles/globals.css";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../theme/Theme";
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout theme={theme} setTheme={setTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

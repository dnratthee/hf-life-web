import "../styles.css";

import Head from "next/head";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#FFF9B0",
      contrastText: "#FC4F4F",
    },
    secondary: {
      main: "#FFBC80",
      contrastText: "#FC4F4F",
    },
    warning: {
      main: "#FFAEC0",
    },
    background: {
      default: "#311d47",
    },
    text: {
      primary: "#FC4F4F",
    },
  },
});

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <div>
      <Head>
        <title>HF Life :: Healthy Food</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Nutrition for Older Adults" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

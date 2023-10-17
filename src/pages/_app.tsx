import React from "react";
import Nav from "@/components/NavBar/Nav";
import "@/styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react"; // Import Box component
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

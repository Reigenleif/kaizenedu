import { Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { type Session } from "next-auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Footer } from "./Footer";

export interface LayoutProps {
  children: React.ReactNode;
  type?: "signin" | "signup";
  includeFooter?: boolean;
}

export interface ProtectedLayoutProps extends LayoutProps {
  session: Session | null;
}

export function BaseLayout({
  children,
  type,
  includeFooter = true,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>kaizen.edu</title>
        <meta name="description" content="Website Learning for Collage Course" />
        <link rel="icon" href="/main-icon.webp" />
        <link rel="image_src" href="/main-icon.webp"/> 
      </Head>
      <Flex flexDir="column" w="100vw" overflowX="hidden">
        <Navbar type={type} />
        {children}
      </Flex>
      {includeFooter && <Footer />}
    </>
  );
}

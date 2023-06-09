"use client";

import CartDrawer from '@/components/drawers/cart';
import KitchenDrawer from '@/components/drawers/kitchen';
import Footer from '@/components/footer';
import Header from '@/components/header';
import DrawersContextProvider from '@/context/drawers';
import '@/styles/app.css';
import { Layout } from "antd";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0097c2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Keep your portfolio of homes and apartments and control your Property management." />
        <link rel="icon" href="/meta/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" />
        <link rel="manifest" href="/meta/manifest.json" />
        <title>iCloudReady</title>
      </head>
      <body>
        <DrawersContextProvider>
          <Layout style={{ backgroundColor: "transparent" }}>
            <Header />
            <Layout.Content>
              {children}
              <CartDrawer />
              <KitchenDrawer />
            </Layout.Content>
            <Footer />
          </Layout>
        </DrawersContextProvider>
      </body>
    </html>
  );
}

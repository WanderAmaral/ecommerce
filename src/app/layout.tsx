
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header.components";
import UserContextProvider from "@/contexts/user.context";

import CategoryContextProvider from "@/contexts/category.context";
import CartContextProvider from "@/contexts/cart.context";
import Cart from "./components/cart/cart.components";
import { Provider } from "react-redux";
import store from "./store/store";
import ProviderRedux from "./store/provider";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amaral-Ecommerce",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        
        
        <ProviderRedux>
        <UserContextProvider>
          <CategoryContextProvider>
            <CartContextProvider>
              <Header />
              <Cart />
                {children}
                
            </CartContextProvider>
          </CategoryContextProvider>
        </UserContextProvider>
        </ProviderRedux>
        
        
      </body>
    </html>
  );
}

import "@styles/globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Nav, Provider } from "@component";

export const metadata: Metadata = {
  title: "Promptopia",
  description: "Share AI prompts",
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        <Nav />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;

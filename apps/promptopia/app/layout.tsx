import "@styles/globals.css";
import { ReactNode } from "react";
import { Nav, Provider } from "@components";

interface Props {
  children: ReactNode;
}

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }: Props) {
  return (
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
}

import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Cuy Anime List",
  description: "Indonesia Anime Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

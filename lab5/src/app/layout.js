import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * Add Bootstrap
 */
import 'bootstrap/dist/css/bootstrap.min.css';


export const metadata = {
  title: "Lab5",
  description: "React and Email page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    {children}
    </body>
    </html>
  );
}

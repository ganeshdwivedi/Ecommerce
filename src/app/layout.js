import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Prvider from "./redux/Prvider";

export const metadata = {
  title: "Puma",
  description: "FOREVER FASTER IS ALWAYS FIRST, NEVER SECOND, NEVER THIRD.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "  font-[FFDINforPumaW07-Bold-latin]"}>
        <Prvider>{children}</Prvider>
      </body>
    </html>
  );
}

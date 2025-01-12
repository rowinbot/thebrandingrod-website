import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const sans = Poppins({
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${sans.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}

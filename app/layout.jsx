import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar/Navbar";
import Bottombar from "@/components/bottombar/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NiXpense",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`bg-gradient-0 bg-gradient-to-r from-gradient-0 to-gradient-58 ${inter.className}`}
        >
          <Navbar />
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
            <div className="bg">{children}</div>
          </section>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}

import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Providers from "@/app/Providers";

export const metadata = {
  title: "Movie 411",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

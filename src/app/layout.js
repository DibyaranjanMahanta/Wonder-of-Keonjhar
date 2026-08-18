import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Wonders of Keonjhar",
  description:
    "Discover the natural wonders, heritage, temples, culture, festivals and history of Keonjhar, Odisha.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
}

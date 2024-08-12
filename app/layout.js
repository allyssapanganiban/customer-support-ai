import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Education Bot",
  description: "Effortlessly navigate your academic journey with our AI-driven customer support bot. Whether you need help with course enrollment deadlines, finding the right scholarships, or learning more about events or campus life, our smart assistant is here to provide instant, accurate answers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sky Connect",
  description: "Sky Connect is a flight search engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         {children}
        <Image
          className="-z-1 opacity-30"
          src={"/airport.png"}
          alt={"airport"}
          quality={100}
          fill={true}
          sizes="100vw"
          objectFit="cover"
        />
      </body>
    </html>
  );
}

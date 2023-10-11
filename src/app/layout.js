import Head from "next/head";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=IBM+Plex+Serif:wght@100&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100&family=Raleway:ital,wght@1,300&family=Sofia+Sans+Condensed:ital,wght@0,1;0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,100&family=Young+Serif&display=swap"
        rel="stylesheet"
      ></link>
      </Head>
      <body>{children}</body>
    </html>
  );
}
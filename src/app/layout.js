import "./globals.css";

export const metadata = {
  title: "PGO",
  description: "PlayGround Only",
  icons:{
    icon:"./favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body
        className={''}
      >
        {children}
      </body>
    </html>
  );
}

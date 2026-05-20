import "./globals.css";

export const metadata = {
  title: "ParkShell",
  description: "Universal parking companion"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

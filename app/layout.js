import "./globals.css";

export const metadata = {
  title: "ParkShell",
  description: "Universal metered parking companion app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

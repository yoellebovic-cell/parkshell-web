export const metadata = {
  title: "ParkShell",
  description: "Universal metered parking companion app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

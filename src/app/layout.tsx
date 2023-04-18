export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

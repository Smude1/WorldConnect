import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'WorldConnect',
  description: 'Connect with people all around the world in real time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

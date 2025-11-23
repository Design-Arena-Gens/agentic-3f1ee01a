import './globals.css';

export const metadata = {
  title: 'Micro-Essay: Civic Impact of Community Podcasts',
  description: 'An accessible examination of how grassroots podcasts shape local civic participation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

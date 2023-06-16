import './globals.css';

export const metadata = {
  title: 'Tickets',
  description: 'Tickets to your favorite shows',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="antialiased text-gray-900 bg-gray-200 flex items-center justify-center">
          <div className="min-h-screen p-8 max-w-2xl">{children}</div>
        </div>
      </body>
    </html>
  );
}

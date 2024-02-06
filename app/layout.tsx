import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <p>esto es parte de layout</p>
        {children}
        <footer className='bg-blue-500 p-2 flex justify-center text-white'>
          <p>este es el footer</p>
        </footer>
        </body>
    </html>
  );
}

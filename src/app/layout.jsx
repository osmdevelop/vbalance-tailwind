import '@/styles/tailwind.css';  // Import your global styles
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function RootLayout({ children, params }) {
  const { lang } = params;  // Get the lang parameter from the dynamic route

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&display=swap"
        />
      </head>
      <body className="text-gray-950 antialiased">
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

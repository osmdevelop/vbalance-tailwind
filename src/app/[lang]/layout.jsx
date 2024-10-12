import '@/styles/tailwind.css'; 
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
          // https://fonts.adobe.com/fonts/pauline-didone-variable?vf-instance=Bold&vf-font-size=100&vf-font=PaulineDidoneVariable-Regular#fonts-section
        />
        <link
          rel="stylesheet"
          href="https://fonts.adobe.com/fonts/pauline-didone-variable?vf-instance=Medium&vf-font-size=100&vf-font=PaulineDidoneVariable-Regular"
        />
            {/* <link href="https://db.onlinewebfonts.com/c/7f71968c596ca49dd9a64d08641d5025?family=Pauline+Didone+W01+Bold" rel="stylesheet" /> */}
      </head>
      <body className="text-gray-950 antialiased">
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

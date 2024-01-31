import { montserrat } from './ui/fonts';
import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <h1>PAGINA DE ENSAYO</h1>
        {children}
        <footer className="flex items-center justify-center py-10">
          hecho por cristian trilleras
        </footer>
      </body>
    </html>
  );
}

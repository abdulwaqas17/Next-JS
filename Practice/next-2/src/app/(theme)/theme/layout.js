import "@/app/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Light/Dark Theme Example",
  description: "Next.js theme switcher using TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

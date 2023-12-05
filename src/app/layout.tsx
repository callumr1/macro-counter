import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Macro Counter",
  description: "Quickly and easily count your macros!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-2">
          <div className="flex flex-col p-4"></div>
          {children}
          <div className="flex flex-col p-4 pt-6">
            <p>Created by Callum Robertson</p>
            <div className="flex flex-row justify-center">
              <a href="https://www.linkedin.com/in/callum-robertson1/" className="px-2">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="align-centre opacity-50 hover:opacity-100"
                />
              </a>
              <a href="https://www.linkedin.com/in/callum-robertson1/" className="px-2">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="align-centre opacity-50 hover:opacity-100"
                />
              </a>
            </div>
            
          </div>
        </main>
      </body>
    </html>
  );
}

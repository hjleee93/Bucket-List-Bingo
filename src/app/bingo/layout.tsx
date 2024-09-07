import type { Metadata } from "next";
import '../globalIcon.css';
import BackButton from "@/components/BackButton";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function BingoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <BackButton/>
      {children}
      </div>
    </div>
    
  );
}
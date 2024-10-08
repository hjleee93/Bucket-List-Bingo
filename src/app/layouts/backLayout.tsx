import type { Metadata } from "next";
import '../globalIcon.css';
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function BackLayout({
  children,
  title
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <div>
      <div className="flex items-center my-7 mx-5">
        <BackButton />
        <div className="flex-1 flex justify-center">
          <p className="text-2xl font-bold">{title}</p>
        </div>
      </div>

      {children}
    </div>
  );
}

'use client'

export default function CommonLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex items-center my-7 mx-5">
      {children}
    </div>
  );

}
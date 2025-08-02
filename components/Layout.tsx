import Sidebar from './Sidebar';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-32 pl-4 pr-4 pt-4 w-full bg-yellow-50 min-h-screen text-[#E00D50]">
        {children}
      </main>
    </div>
  );
}

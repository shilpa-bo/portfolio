import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Sidebar() {
  const router = useRouter();

  const linkClass = (path: string) =>
    `transition-colors duration-200 ${
      router.pathname === path
        ? 'font-bold text-[#4D999D]'
        : 'hover:font-bold hover:text-[#4D999D]'
    }`;


  return (
    <div className="pt-10 w-40 h-screen fixed p-4 bg-yellow-50 text-[#E00D50] text-sm">
      <div className=" text-base font-bold mb-20" style={{ color: '#4D999D' }}> shilpa bojireddy</div>
      <nav className="text-base flex flex-col space-y-2">
        <Link href="/about" className={linkClass('/about')}>about</Link>
        <Link href="/experience" className={linkClass('/experience')}>experience</Link>
        <Link href="/projects" className={linkClass('/projects')}>projects</Link>
        <Link href="/art" className={linkClass('/art')}>art</Link>
      </nav>
    </div>
  );
}

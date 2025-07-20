"use client"
import { LogOut } from 'lucide-react';
import NavItem from '../nav-item';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { adminLinks, companyLinks } from '../nav-data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// adminLinks

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();
  const links = pathname.includes("/company") ? companyLinks : adminLinks;


  return (
    <div className="flex">
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Sidebar */}
      <aside
        className={`absolute left-0 top-0 z-20 flex h-screen transition-transform pr-5  transform duration-300 ease-linear flex-col overflow-y-hidden bg-primary  text-[#D2D2D2] w-[240px] lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col ">
          <div>
            <div className="flex items-center justify-center my-4 text-white">
            <Image className='' src="/assets/logo.png" alt="logo" width={158} height={81} />
            </div>
            <nav>
              <NavItem item={links} />
            </nav>
          </div>
          <Link href={"/"}> <Button className="mx-3 absolute bottom-3 w-[200px] text-rose-500 bg-white cursor-pointer hover:bg-white"><LogOut className="rotate-180" />Log Out</Button></Link>
        </div>
      </aside>
    </div>
  );
}

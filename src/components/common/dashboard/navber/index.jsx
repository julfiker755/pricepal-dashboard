import { useTitle } from "@/components/context/title";
import {Menu } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";


export default function Navber({ sidebarOpen, setSidebarOpen }) {
  const {title,subtitle} = useTitle();
  return (
    <div className="sticky top-0  flex w-full bg-[white] py-3 shadow-xs">
      <header className="w-full px-3">
        <div className="flex justify-between items-center">
          {/* left side*/}
          <div className="flex gap-4 items-center">
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
              className="z-99999 block  border rounded-md border-stroke cursor-pointer  p-1.5 lg:hidden"
            >
              <Menu className="cursor-pointer" size={20} />
            </button>
            <ul className="hidden lg:block">
              <li className="text-2xl font-bold text-black1">{title}</li>
             {subtitle &&  <li className="text-black1 font-normal">{subtitle}</li>}
            </ul>
          </div>
          {/* right side */}
          <div>
            <div className="flex mr-6 gap-2">
              <Link href={"/company/notification"}>
              <div className="relative cursor-pointer flex items-center">
                <Image src="/assets/bell.png" alt="Notification Icon" width={50} height={50} />
              </div>
              </Link>
              <Link href={"/company/profile"}>
              <div className="relative flex items-center gap-2 rounded-full cursor-pointer">
                <Image src="/assets/user.png" alt="User Icon" width={50} height={50} />
                <span className="text-[#000000] text-xl font-medium">Brian F.</span>
              </div>
              </Link>
             
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavItem({ item }) {
  const pathname = usePathname();
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const menuRefs = useRef([]);

  useEffect(() => {
    menuRefs.current.forEach((menu, index) => {
      if (menu) {
        menu.style.maxHeight =
          activeSubmenu === index ? `${menu.scrollHeight}px` : "0px";
      }
    });
  }, [activeSubmenu]);

  const handleSubmenuToggle = (index) => {
    setActiveSubmenu((prev) => (prev === index ? null : index));
  };

  return (
    <ul className="space-y-1">
      {item.map(({ to, label, icon: Icon, submenu }, parentIndex) => (
        <li key={parentIndex}>
          {to ? (
            <Link className={`flex px-3 ${pathname === to && "!border-l-5 !bg-white !text-primary"} hover:bg-white rounded-r-md hover:!text-primary border-[#00AAFF] py-2 items-center font-medium text-base gap-x-2 text-[#D2D2D2]`} href={to}>
              {Icon && <Icon size={20} />} {label}
            </Link>
          ) : (
            <div
              onClick={() => handleSubmenuToggle(parentIndex)}
              className="flex items-center px-3  py-2 justify-between cursor-pointer"
            >
              <span className="flex items-center gap-x-2">
                {Icon && <Icon size={20} />} {label}
              </span>
              {activeSubmenu === parentIndex ? (
                <ChevronUp className="size-5 font-extrabold" />
              ) : (
                <ChevronDown className="size-5 font-extrabold" />
              )}
            </div>
          )}

          {submenu && (
            <ul
              ref={(el) => {
                if (el) menuRefs.current[parentIndex] = el;
              }}
              className="overflow-hidden transition-all duration-300 ease-out max-h-0 space-y-1"
            >
              {submenu.map(({ to, label, icon: SubIcon }, subIndex) => (
                <li key={subIndex} className={`${pathname === to && "!border-l-3 !bg-[#FFFFFF66] !text-white"} pl-6 hover:bg-[#FFFFFF66] border-[#FED139] py-2 hover:text-white`}>
                  {to && (
                    <Link className="flex items-center gap-x-2" href={to}>
                      {SubIcon && <SubIcon size={20} />} {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

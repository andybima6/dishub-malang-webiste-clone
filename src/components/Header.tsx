"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderImage from "@/assets/header.png";

const topNavLinks = [
  { label: "PORTAL PEMKOT MALANG", href: "https://malangkota.go.id/" },
  { label: "SMART CITY", href: "https://smartcity.malangkota.go.id/" },
  { label: "SAMBAT ONLINE", href: "https://sambat.malangkota.go.id/" },
  { label: "PPID", href: "https://ppid.malangkota.go.id/" },
];

const subNavLinks = [
  { label: "Beranda", href: "/" },
  {
    label: "Profile",
    href: "/profile",
    submenu: [
      { label: "Profile Dinas Perhububungan", href: "/profile" },
      { label: "Visi Misi", href: "/visi-misi" },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="w-full">
    
      <img src={HeaderImage} alt="header" className="w-full" />
      <div className="bg-header-gradient shadow-md z-50 relative">
        {/* Top Nav */}
        <div className="border-b border-white px-2">
          <div className="mx-auto px-4 py-2 flex items-center justify-between">
            <div className="hidden md:flex gap-1">
              {topNavLinks.map((item) => (
                <Button key={item.label} variant="ghost" asChild className="text-white px-4 py-3 rounded-none">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col gap-1 px-4 pb-2">
              {topNavLinks.map((item) => (
                <Button key={item.label} variant="ghost" asChild className="text-white px-4 py-2 rounded-none">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Sub Nav */}
        <div className="px-4">
          <nav className="flex flex-wrap gap-1 text-sm justify-start py-2 relative">
            {subNavLinks.map((item) =>
              item.submenu ? (
                <div key={item.label} className="relative">
                  <Button variant="ghost" className="text-white px-4 py-2 rounded-none flex items-center gap-1" onClick={() => toggleDropdown(item.label)}>
                    {item.label}
                    <ChevronDown size={14} />
                  </Button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-0.5 bg-white shadow-lg z-[9999] rounded w-48">
                      {item.submenu.map((sub) => (
                        <a key={sub.label} href={sub.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Button key={item.label} variant="ghost" asChild className="text-white px-4 py-2 rounded-none">
                  <a href={item.href}>{item.label}</a>
                </Button>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

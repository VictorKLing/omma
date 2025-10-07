"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { sanityClient } from "../../lib/sanity";

interface MenuItem {
  href: string;
  label: string;
  highlight?: boolean;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [navLinks, setNavLinks] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Busca os links do Sanity
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const query = `*[_type == "layout"][0]{ menu[]{ label, href, highlight } }`;
        const data = await sanityClient.fetch(query);
        setNavLinks(data?.menu || []);
      } catch (err) {
        console.error("Erro ao buscar menu do Sanity:", err);
      }
    };
    fetchMenu();
  }, []);

  if (pathname?.startsWith("/lp")) return null;

  return (
    <header className="">
      <div className="fixed top-4 inset-x-0 z-50 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl bg-[var(--theme)]/5 backdrop-blur-xl ring-1 ring-[var(--theme)]/10 shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-6">
              <Link href="/" className="inline-flex items-center gap-2">
                <img
                  src="/omma_logo.png"
                  alt="OMMA Engenharia"
                  className="h-7 w-auto"
                />
              </Link>
              <nav
                className="hidden md:flex items-center gap-7 text-sm"
                style={{ fontFamily: "DM Sans, Inter" }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[var(--text)]/90 hover:text-[var(--text)] transition inline-flex items-center gap-2
                      ${pathname === link.href ? "text-[var(--text)]" : ""}`}
                  >
                    {link.label}
                    {link.highlight && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-amber-400"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    )}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <label className="relative inline-block w-14 h-8">
                <input
                  type="checkbox"
                  checked={isDark}
                  onChange={toggleTheme}
                  className="opacity-0 w-0 h-0 peer"
                />
                <span
                  className="
                    absolute cursor-pointer top-0 left-0 right-0 bottom-0
                    bg-zinc-100 rounded-full transition-all duration-300
                    peer-checked:bg-zinc-800
                    before:content-[''] before:absolute
                    before:h-6 before:w-6 before:rounded-full
                    before:left-1 before:top-1/2 before:-translate-y-1/2
                    before:bg-gradient-to-tr before:from-amber-400 before:to-amber-600
                    before:transition-all before:duration-300
                    peer-checked:before:left-[calc(100%-1.75rem)]
                    peer-checked:before:bg-zinc-800
                    peer-checked:before:bg-none
                    peer-checked:before:shadow-[inset_-3px_-2px_5px_-2px_#FFB900,inset_-10px_-4px_0_0_#FFB900]
                  "
                ></span>
              </label>
              <Link
                href="../../contato"
                className="inline-flex items-center justify-center rounded-full border border-amber-400/90 px-5 py-2.5 text-sm text-amber-400 hover:bg-amber-400/10 transition outline-none ring-1 ring-inset ring-white/10 hover:ring-white/20 active:scale-[0.98]"
                style={{ fontFamily: "DM Sans, Inter" }}
              >
                Contato
              </Link>
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M4 5h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 19h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="border-t border-white/10"></div>
        </div>
      </div>
      <div className="relative">
        {/* Menu lateral */}
        <div
          className={`block md:hidden max-w-[340px] w-full top-1/2 -translate-y-1/2 font-sans antialiased transition-all duration-300 fixed z-[60] bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl ${
            menuOpen ? "right-0" : "-right-full"
          }`}
        >
          <div className="flex h-[95vh] flex-col justify-between">
            <div className="px-4 py-6">
              <div className="flex justify-between ite">
                <img
                  src="/omma_logo.png"
                  alt="OMMA Engenharia"
                  className="h-7 w-auto"
                />
                <button onClick={() => setMenuOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x-icon lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <nav className="mt-6">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block rounded-lg px-4 py-2 text-sm font-medium 
                          ${
                            pathname === link.href
                              ? "bg-yellow-400 text-white"
                              : "hover:bg-yellow-400 hover:text-white"
                          }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    const pathname = usePathname();
    if (pathname?.startsWith('/lp')) return null;
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3">
                <div>
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                            {/* building-2 icon simplified */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                        </div>
                        <span className="text-lg tracking-tight font-semibold">QMA Engenharia</span>
                    </div>
                    <p className="mt-3 text-sm text-[var(--text2)]">Excelência técnica para projetos que exigem eficiência, segurança e prazo.</p>
                </div>
                <div>
                    <h5 className="text-sm tracking-tight font-semibold">Contato</h5>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--text2)]">
                        <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-yellow-400" /> contato@qma-eng.com</li>
                        <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-yellow-400" /> (11) 0000-0000</li>
                        <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-yellow-400" /> SP • RJ • MG</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-[var(--text2)] flex flex-col sm:flex-row justify-between gap-3">
                    <span>© <span>{year}</span> QMA Engenharia. Todos os direitos reservados.</span>
                    <span>Política de Privacidade • Termos de Uso</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
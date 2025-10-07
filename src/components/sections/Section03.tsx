'use client';
import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../lib/sanity';

// interface Project {
//   title: string;
//   category: string;
//   description: string;
//   buttonHref?: string;
// }

const Section03: React.FC = () => {
    // const [projects, setProjects] = useState<Project[]>([]);
    const [stats, setStats] = useState<{ number: string; label: string }[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
            const query = `*[_type == "home"][0]{
                projetos {
                projects[] {
                    title,
                    category,
                    description,
                    banner,
                    href
                },
                stats[] {
                    number,
                    label
                }
                }
            }`;
            const data = await sanityClient.fetch(query);
            // setProjects(data.projetos?.projects || []);
            setStats(data.projetos?.stats || []);
            } catch (error) {
            console.error('Erro ao buscar projetos:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="px-4 py-16">
            <h3 className="text-center text-[28px] sm:text-[35px] font-bold tracking-tight" style={{ fontFamily: 'Exo, Inter' }}>
                Nossos <span className="text-amber-400">Projetos</span>
            </h3>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
                {/* Featured Project */}
                <section className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950 col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-8 min-h-[320px] sm:min-h-[360px] md:min-h-[460px]">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Casa Melhoramentos - Escritório corporativo moderno" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="relative sm:p-5 md:p-7 lg:p-8 flex flex-col h-full p-4">
                        <div className="flex items-center justify-between">
                            <div className="text-xs sm:text-sm text-zinc-300">
                                <span className="inline-flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-amber-400"></span>
                                    Projeto Principal
                                </span>
                            </div>
                            <button className="inline-flex items-center justify-center size-8 sm:size-9 rounded-lg sm:rounded-xl bg-black/30 border border-white/10 backdrop-blur hover:border-white/20 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-zinc-100"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                            </button>
                        </div>
                        <div className="mt-auto">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]" style={{ fontFamily: 'Exo, Inter' }}>
                                Casa Melhoramentos
                            </h1>
                            <p className="mt-2 sm:mt-3 md:mt-4 text-sm md:text-base text-zinc-200/90 max-w-xl">
                                Projeto e implantação de escritório corporativo moderno que preserva 128 anos de história da companhia, unindo tradição e modernidade em 4.000 m².
                            </p>
                            <div className="mt-4 sm:mt-6">
                                <button className="inline-flex items-center justify-center size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-amber-500 text-white shadow-[0_10px_30px_-10px_rgba(245,158,11,0.7)] hover:-translate-y-px active:translate-y-0 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 sm:w-5 h-4 sm:h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accent Panel */}
                <aside className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 min-h-[320px] sm:min-h-[360px] md:min-h-[460px]" style={{ backgroundColor: '#f59e0b' }}>
                    <div className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '20px 20px', backgroundPosition: '10px 10px' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/10 mix-blend-soft-light"></div>
                    <div className="relative h-full p-4 sm:p-6 md:p-8 flex flex-col">
                        <div className="flex items-center justify-between text-white/90">
                            <span className="text-xs sm:text-sm font-medium">Engenharia & Construção</span>
                            <span className="text-xs sm:text-sm">25 anos</span>
                        </div>
                        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-white leading-tight" style={{ fontFamily: 'Exo, Inter' }}>
                            Soluções Completas Turnkey
                        </h2>
                        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/80 max-w-sm">
                            Mais de 1000 obras entregues com gerenciamento integral do processo, desde test fits até suporte pós ocupação.
                        </p>
                        <div className="mt-auto pt-4 sm:pt-6 flex items-center gap-3 text-white/90">
                            <span className="inline-flex items-center gap-2 px-2.5 sm:px-3.5 h-8 sm:h-9 rounded-lg sm:rounded-xl bg-white/70 backdrop-blur border border-white/60 text-xs sm:text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 sm:w-4 h-3.5 sm:h-4"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                                <span className="font-medium hidden sm:inline text-black">Corporativo</span>
                                <span className="font-medium sm:hidden text-black">Corp</span>
                            </span>
                        </div>
                    </div>
                </aside>

                {/* Project cards 1..3 */}
                {[{
                    title: 'Pátio Malzone', meta: 'Faria Lima • 315 m² • 60 dias', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                },{
                    title: 'Movile', meta: 'São Carlos • 748 m² • 45 dias', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                },{
                    title: 'Escola Paraisópolis', meta: '3.700 m² • 120 dias', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', wide: true
                },{
                    title: 'Reforma Express', meta: 'Brig. L. Antônio • 250 m² • 4 dias', img: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                },{
                    title: 'Alameda Santos', meta: 'São Paulo • 5.400 m² • 80 dias', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                }].map((p, i) => (
                    <section key={i} className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950 ${p.wide ? 'col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4' : 'col-span-1 md:col-span-3 lg:col-span-4'} min-h-[200px] sm:min-h-[240px] md:min-h-[260px]`}>
                        <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>
                        <div className="relative p-4 sm:p-5 md:p-6 h-full flex flex-col">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base sm:text-lg tracking-tight font-semibold" style={{ fontFamily: 'Exo, Inter' }}>{p.title}</h3>
                                <button className="inline-flex items-center justify-center size-7 sm:size-8 rounded-lg bg-black/30 border border-white/10 backdrop-blur hover:border-white/20 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-zinc-100"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </button>
                            </div>
                            <div className="mt-auto">
                                <p className="text-xs text-zinc-400 mb-3">{p.meta}</p>
                                <button className="inline-flex items-center justify-center size-9 sm:size-11 rounded-xl sm:rounded-2xl bg-amber-500 text-white shadow-[0_10px_30px_-10px_rgba(245,158,11,0.7)] hover:-translate-y-px active:translate-y-0 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 sm:w-5 h-4 sm:h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </button>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Company Stats */}
            <div className="mt-16 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="text-4xl font-bold text-amber-400" style={{ fontFamily: 'Exo, Inter' }}>
                        {stat.number}
                        </div>
                        <div className="text-zinc-400 mt-2">{stat.label}</div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section03;
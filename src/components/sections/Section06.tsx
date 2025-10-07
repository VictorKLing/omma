'use client';
import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../lib/sanity';

interface CtaData {
  title: string;
  subtitle: string;
  button1Text: string;
  button2Text: string;
}

const Section06: React.FC = () => {
      const [cta, setCta] = useState<{
  title: string;
  subtitle: string;
  buttons: { text: string; href: string }[];
} | null>(null);

useEffect(() => {
  const fetchCta = async () => {
    try {
      const query = `*[_type == "home"][0]{
        section06 {
          cta {
            title,
            subtitle,
            buttons[]{ text, href }
          }
        }
      }`;
      const data = await sanityClient.fetch(query);
      setCta(data.section06?.cta || null);
    } catch (error) {
      console.error('Erro ao buscar CTA:', error);
    }
  };

  fetchCta();
}, []);
    return (
        <>
            {/* Minimal CTA strip */}
            <section className="relative py-10">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 md:flex-row md:p-8">
                        <div>
                            <h4 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-white">
                                {cta?.title || 'Pronto para acelerar seu projeto?'}
                            </h4>
                            <p className="mt-1 text-sm text-neutral-400">
                                {cta?.subtitle || 'Fale com nosso time e receba um planejamento personalizado.'}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href={cta?.buttons?.[0]?.href || '#'} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">
                                {cta?.buttons?.[0]?.text || 'Entrar em contato'}
                            </a>
                            <a href={cta?.buttons?.[1]?.href || '#'} className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-4 py-2.5 text-sm font-medium text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-400 transition">
                                {cta?.buttons?.[1]?.text || 'Agendar reunião'}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sobre */}
            <section id="sobre" className="relative overflow-hidden">
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
                <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1974&auto=format&fit=crop" alt="Equipe de engenharia em operação" className="h-[320px] md:h-[420px] w-full object-cover" />
                            <div className="absolute -top-1 -right-1 h-16 w-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-br-2xl rounded-tl-2xl shadow-[0_0_40px_-10px] shadow-yellow-500/50"></div>
                        </div>
                        <div className="hidden md:flex absolute -right-8 top-16">
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                <img src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1470&auto=format&fit=crop" alt="Profissional de obra" className="h-40 w-40 object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-yellow-400">QUEM SOMOS?</h2>
                        <p className="mt-4 text-base md:text-lg text-white/80">Soluções completas para ambientes de alto padrão.</p>
                        <p className="mt-4 text-sm md:text-base text-white/70">A QMA Engenharia cuida de toda a gestão da sua obra, do planejamento à chave na mão, garantindo que cada etapa seja executada com precisão técnica e rigor. Nossa metodologia comprovada nos permite entregar cada projeto com agilidade, evitando custos extras com aluguel de espaços provisórios ou interrupções nas suas operações.</p>
                        <p className="mt-4 text-sm md:text-base text-white/70">Transparência, previsibilidade e segurança fazem parte do nosso compromisso. É mais do que entregar um projeto: é construir valor, criando espaços sofisticados que refletem a essência da sua marca e fortalecem sua presença no mercado.</p>
                        <div className="mt-8 flex items-center gap-3">
                            <a href="#contato" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 hover:from-yellow-500/30 hover:to-amber-500/30 transition-colors">
                                <span>Solicite um orçamento agora</span>
                            </a>
                            <div className="hidden sm:flex items-center gap-2 text-white/60 text-sm">
                                <span>Compromisso com prazos e segurança</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Depoimento */}
            <section className="relative">
                <div className="mx-auto max-w-6xl px-4 pb-16">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" alt="Cliente" className="h-14 w-14 rounded-full object-cover ring-2 ring-yellow-500/30" />
                            <div className="flex-1">
                                <p className="text-base md:text-lg text-white/80">“Execução impecável, sem atrasos e com comunicação clara do início ao fim. Os indicadores de obra e a previsibilidade financeira fizeram toda a diferença.”</p>
                                <div className="mt-2 flex items-center gap-2 text-sm text-white/50">
                                    <span>São Paulo, SP</span>
                                    <span className="mx-2">•</span>
                                    <span>Entrega em 90 dias</span>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10"></path><path d="M7 12h8"></path><path d="M7 17h6"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parceria: Arquitetos */}
            <section className="relative py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
                            <h3 className="text-[26px] md:text-[32px] font-semibold tracking-tight text-white">Seja um <span className="text-yellow-300">arquiteto</span> parceiro da <span className="text-white">OMMA</span></h3>
                            <p className="mt-4 text-[15px] leading-7 text-neutral-300">A OMMA Engenharia cuida de toda a gestão da sua obra, do planejamento à obra, garantindo que cada etapa seja executada com precisão técnica e rigor. Nossa metodologia comprova nosso empenho em entregar cada projeto com qualidade, evitando custos extras com alinhamento, escopo previsível e transparência nas operações.</p>
                            <p className="mt-4 text-[15px] leading-7 text-neutral-300">Transparência, previsibilidade e segurança fazem parte do nosso compromisso. E mais do que entregar ambientes funcionais, criamos espaços que refletem as essências de sua marca e fortalecem seu posicionamento no mercado.</p>

                            <div className="mt-6">
                                <button className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-5 py-3 text-sm font-medium text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-400 transition">SEJA UM ARQUITETO PARCEIRO AGORA!</button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative mx-auto w-full max-w-md">
                                <div className="absolute -left-6 -top-6 h-40 w-40 rounded-2xl bg-yellow-400/10 blur-2xl"></div>
                                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_0_60px_rgba(250,204,21,0.12)]">
                                    <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop" alt="Profissionais em obra" className="h-64 w-full rounded-2xl object-cover md:h-80" />
                                </div>
                                <div className="relative mt-6 translate-x-6 md:translate-x-10">
                                    <div className="inline-block rounded-3xl border border-white/10 bg-white/5 p-2">
                                        <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop" alt="Equipe de construção" className="h-40 w-72 rounded-2xl object-cover md:h-48 md:w-96" />
                                    </div>
                                    <div className="absolute right-2 md:-right-4 -top-4 h-10 w-10 rounded-lg bg-yellow-400/20 ring-1 ring-yellow-300/40"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contato */}
            <section id="contato" className="relative">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43f?q=80&w=2070&auto=format&fit=crop" alt="Canteiro de obras" className="h-full w-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-[#0b0b0f]"></div>
                </div>

                <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
                    <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur px-4 sm:px-8 py-8 md:py-10 shadow-2xl">
                        <h3 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold">Descubra como garantir a excelência do seu próximo investimento em infraestrutura!</h3>

                        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <input type="text" required placeholder="Nome" className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 pl-3 pr-3 py-3 text-sm placeholder:text-white/40 outline-none" />
                            </div>
                            <div className="relative">
                                <input type="tel" required placeholder="Telefone" className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 pl-3 pr-3 py-3 text-sm placeholder:text-white/40 outline-none" />
                            </div>
                            <div className="relative">
                                <input type="email" required placeholder="E-mail" className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 pl-3 pr-3 py-3 text-sm placeholder:text-white/40 outline-none" />
                            </div>
                            <div className="relative">
                                <input type="text" placeholder="Selecione o tipo de serviço" className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 px-3 py-3 text-sm placeholder:text-white/40 outline-none" />
                            </div>
                            <div className="md:col-span-2">
                                <textarea rows={5} placeholder="Conte um pouco sobre o projeto, prazos e local..." className="w-full rounded-xl bg-white/5 border border-yellow-400/40 focus:border-yellow-400/70 focus:ring-4 focus:ring-yellow-500/20 px-3 py-3 text-sm placeholder:text-white/40 outline-none"></textarea>
                            </div>
                            <div className="md:col-span-2 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2 text-xs text-white/50">
                                    <span>Seus dados estão protegidos e não serão compartilhados.</span>
                                </div>
                                <button type="submit" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 hover:from-yellow-500/30 hover:to-amber-500/30 transition-colors">
                                    <span>Enviar Mensagem</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section06;
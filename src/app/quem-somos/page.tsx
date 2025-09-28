const Page = () => {
    return (
        <>
            {/* Sobre */}
            <section id="sobre" className="relative overflow-hidden">
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
                <div className="mx-auto max-w-7xl px-4 pt-[178px] pb-8 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
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
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
                <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
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
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1974&auto=format&fit=crop" alt="Equipe de engenharia em operação" className="h-[320px] md:h-[420px] w-full object-cover" />
                            <div className="absolute -top-1 -left-1 h-16 w-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-br-2xl rounded-tl-2xl shadow-[0_0_40px_-10px] shadow-yellow-500/50"></div>
                        </div>
                        <div className="hidden md:flex absolute -left-8 top-16">
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                <img src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1470&auto=format&fit=crop" alt="Profissional de obra" className="h-40 w-40 object-cover" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Page;
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
                        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-yellow-400">Quem somos?</h2>
                        {/* <p className="mt-4 text-base md:text-lg text-white/80">Soluções completas para ambientes de alto padrão.</p> */}
                        <p className="mt-4 text-sm md:text-base text-white/70">Desde 1998, a OMMA se estabeleceu como um pilar de excelência e eficiência no segmento de engenharia e construção. Nossa jornada é marcada pela paixão de transformar visões em realidade, sempre com um compromisso inabalável com a excelência e a satisfação do cliente.</p>
                        <p className="mt-4 text-sm md:text-base text-white/70">Oferecemos uma gestão completa de projetos, do planejamento detalhado à entrega pronta para uso. Isso significa que cuidamos de cada detalhe, desde a burocracia inicial até os acabamentos finais, desonerando sua equipe de todas as complexidades e preocupações. É um único ponto de contato, com total previsibilidade, comunicação clara e ausência de surpresas.</p>
                        <p className="mt-4 text-sm md:text-base text-white/70">Nosso portfólio contempla escritórios corporativos, clínicas, laboratórios, lojas e escolas, atendendo empresas de diversos setores, como tecnologia, finanças e saúde. São projetos de 300m² em diante, executados em edifícios de alto padrão, para corporações que buscam expandir ou modernizar suas instalações.</p>
                        {/* <div className="mt-8 flex items-center gap-3">
                            <a href="#contato" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 hover:from-yellow-500/30 hover:to-amber-500/30 transition-colors">
                                <span>Solicite um orçamento agora</span>
                            </a>
                            <div className="hidden sm:flex items-center gap-2 text-white/60 text-sm">
                                <span>Compromisso com prazos e segurança</span>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
                <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
                    <div className="relative">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-yellow-400">Nosso propósito</h2>
                        {/* <p className="mt-4 text-base md:text-lg text-white/80">Soluções completas para ambientes de alto padrão.</p> */}
                        <p className="mt-4 text-sm md:text-base text-white/70">Na OMMA, nosso foco é entregar soluções completas em obras, com gestão integral que elimina preocupações e assegura previsibilidade para cada cliente. Acreditamos que transformar um projeto em realidade exige mais do que um bom design: exige excelência na gestão, agilidade na execução e compromisso com resultados.</p>
                        <p className="mt-4 text-sm md:text-base text-white/70">Nosso propósito é ser a parceira estratégica que transforma ambientes em experiências, oferecendo segurança, eficiência e tranquilidade em cada entrega.</p>
                        <p className="mt-4 text-sm md:text-base text-white/70">Nossa equipe, formada por engenheiros, arquitetos e especialistas em engenharia corporativa, é a alma da OMMA. Mais do que construir estruturas, cultivamos relacionamentos sólidos, baseados na transparência, no profissionalismo e na busca constante por superar expectativas.</p>
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
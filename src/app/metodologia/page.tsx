import Timeline from '../../components/shared/Timeline'

const Metodologia = () => {
    return (
        <section id="contato" className="relative md:pt-[114px]">
            <div className='sm:px-6 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Left images */}
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-6 sm:grid-cols-12 gap-4 sm:gap-6">
                            <div className="col-span-6 sm:col-span-8">
                                <div className="aspect-[470/419] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                                    <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1974&auto=format&fit=crop" alt="Ambiente corporativo 4" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <div className="aspect-[326/289] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                                    <img src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?q=80&w=1974&auto=format&fit=crop" alt="Ambiente corporativo 5" className="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-5 sm:col-start-5">
                                <div className="aspect-square w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1849&auto=format&fit=crop" alt="Ambiente corporativo 6" className="h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-[28px] sm:text-[35px] font-bold tracking-tight leading-[1.25]" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
                            <span className="text-white">Obras ágeis do</span> <span className="text-amber-400">planejamento </span> à entrega
                        </h2>

                        <div className="mt-5">
                            <p className="text-[17px] sm:text-[18px] leading-7 text-white/90" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
                                Na OMMA, somos reconhecidos por nossa metodologia de execução acelerada e eficiente. Isso não é apenas sobre velocidade, mas sobre a otimização rigorosa de cronogramas, recursos e fluxos de trabalho, garantindo a entrega do seu projeto dentro do prazo e do orçamento, sem comprometer a qualidade ou a segurança.
                            </p>
                            <p className="mt-4 text-[17px] sm:text-[18px] leading-7 text-white/90" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
                                Nosso foco inabalável é entregar ambientes de alta qualidade e performance construtiva, garantindo durabilidade, funcionalidade, estética, conformidade rigorosa ao seu projeto arquitetônico e às normas técnicas mais exigentes.
                            </p>
                            <p className="mt-4 text-[17px] sm:text-[18px] leading-7 text-white/90" style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}>
                                Com a OMMA, você capitaliza mais rapidamente nas vantagens operacionais e estratégicas do seu novo espaço – seja para expandir suas operações, aumentar a produtividade da sua equipe, aprimorar a experiência dos seus clientes ou fortalecer a imagem da sua marca. Isso permite que você e sua equipe foquem integralmente no crescimento e na inovação do seu core business, enquanto nós cuidamos da infraestrutura.
                            </p>
                        </div>

                        <div className="mt-8">
                            <button className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-9 py-4 text-[15px] text-white hover:bg-amber-400/10 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-white/10 hover:ring-white/20" style={{ fontFamily: 'DM Sans, Inter' }}>
                                CONFIRA NOSSA METODOLOGIA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-8 pb-32'>
                <Timeline />
            </div>
        </section>
    );
};

export default Metodologia;
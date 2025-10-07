import React from 'react';

const steps = [
    { n: '01', title: 'Diagnóstico', items: ['- Revisão de briefing','- Revisão de escopo e requisitos','- Estimativa preliminar'], icon: 'clipboard-list' },
    { n: '02', title: 'Planejamento', items: ['- Priorização e roadmap','- Alinhamento com stakeholders','- Estimativa refinada'], icon: 'workflow' },
    { n: '03', title: 'Execução', items: ['- Gestão de obras','- Acompanhamento semanal','- Controle de qualidade'], icon: 'settings-2' },
    { n: '04', title: 'Entrega', items: ['- Validação final','- Handover e documentação','- Garantia e suporte'], icon: 'check-circle-2' },
];

const Timeline: React.FC = () => {
    return (
        <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
                <h3 className="text-[24px] md:text-[32px] font-semibold tracking-tight text-yellow-400">METODOLOGIA OMMA</h3>
                <p className="mt-2 text-sm md:text-base text-[var(--text)]">O caminho para o sucesso do seu projeto</p>
            </div>

            <div className="relative mt-10 md:mt-14">
                <div className="absolute left-0 right-0 top-[68px] h-px bg-gradient-to-r from-yellow-400/20 via-yellow-400/40 to-yellow-400/20"></div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {steps.map((s) => (
                        <div className="relative" key={s.n}>
                            <div className="absolute left-1/2 top-[60px] -translate-x-1/2">
                                <span className="block h-3 w-3 rounded-full bg-yellow-400 ring-2 ring-yellow-300/30"></span>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="text-[34px] font-semibold tracking-tight text-white/90">{s.n}</div>
                            </div>
                            <div className="mt-4 rounded-2xl bg-white text-neutral-800 p-5 shadow-[0_0_40px_rgba(250,204,21,0.12)]">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-yellow-300 ring-1 ring-yellow-300/40">
                                    {/* Icon placeholder */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /></svg>
                                </div>
                                <h4 className="text-[16px] font-semibold tracking-tight">{s.title}</h4>
                                <ul className="mt-2 space-y-1 text-[13px] text-neutral-600">
                                    {s.items.map((t) => (<li key={t}>{t}</li>))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <button className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-6 py-3 text-sm font-medium text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-400 transition">
                        SOLICITE UM ORÇAMENTO AGORA!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
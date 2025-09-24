import React from 'react';

const Section04: React.FC = () => {
    return (
        <section className="relative py-10 md:py-16">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="mb-8 text-center text-[22px] md:text-[26px] font-semibold tracking-tight text-yellow-300">Nossos clientes</h2>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                        {['YouTube','Google','facebook','Pinterest','twitch','webflow'].map((brand) => (
                            <div className="flex items-center justify-center" key={brand}>
                                <div className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm font-medium text-neutral-300">{brand}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-2">
                        <span className="h-1.5 w-8 rounded-full bg-yellow-400/80"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/40"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/40"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section04;
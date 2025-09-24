import Form from '../../components/lp/LeadForm'


const contato = () => {
    return (
        <section id="contato" className="relative md:pt-[114px]">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43f?q=80&w=2070&auto=format&fit=crop" alt="Canteiro de obras" className="h-full w-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-[#0b0b0f]"></div>
            </div>

            <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur px-4 sm:px-8 py-8 md:py-10 shadow-2xl">
                    <h3 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold">Descubra como garantir a excelência do seu próximo investimento em infraestrutura!</h3>
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default contato;
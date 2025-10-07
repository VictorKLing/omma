"use client";
import React, { useState } from 'react';

export default function WorkWithUsForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDone(false);

    const form = e.currentTarget as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Falha ao enviar.');
      setDone(true);
      form.reset();
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'message' in err && typeof (err as any).message === 'string') {
        setError((err as { message: string }).message);
      } else {
        setError('Erro inesperado');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="relative pt-[120px] md:pt-[184px]">
        

        <div className="relative mx-auto max-w-6xl px-4 pb-16 md:pb-24">
           <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
                <h1 className="text-[26px] md:text-[32px] font-semibold tracking-tight text-[var(--text)]">Trabalhe conosco</h1>
                <p className="mt-4 text-[15px] leading-7 text-[var(--text)]">Somos uma equipe apaixonada por construir, inovar e superar desafios, transformando visões em realidade com excelência e agilidade. Se você busca um ambiente dinâmico, colaborativo e com oportunidades de crescimento, seu lugar é aqui!</p>
                <div className="mt-6">
                    <button className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-5 py-3 text-sm font-medium text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-400 transition">Preencha o formulário e envie seu currículo</button>
                </div>
            </div>

           <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur px-4 sm:px-8 py-8 md:py-10 shadow-2xl mt-6">
                <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input name="nome" required placeholder="Nome" className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-3 py-3 text-sm placeholder:text-white/40 outline-none" />
                    </div>
                    <div>
                        <input name="telefone" required placeholder="Telefone" className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-3 py-3 text-sm placeholder:text-white/40 outline-none" />
                    </div>
                    <div>
                        <input type="email" name="email" required placeholder="E-mail" className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-3 py-3 text-sm placeholder:text-white/40 outline-none" />
                    </div>
                    <div>
                        <input name="servico" placeholder="Selecione o tipo de serviço" className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-3 py-3 text-sm placeholder:text-white/40 outline-none" />
                    </div>
                    <div className="md:col-span-2">
                        <textarea name="mensagem" rows={5} placeholder="Conte um pouco sobre o projeto, prazos e local..." className="w-full rounded-xl bg-white/5 border border-amber-400/40 focus:border-amber-400/70 focus:ring-4 focus:ring-amber-500/20 px-3 py-3 text-sm placeholder:text-white/40 outline-none"></textarea>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-between gap-3">
                        <div className="text-xs text-white/60">Seus dados estão protegidos e não serão compartilhados.</div>
                        <button type="submit" disabled={loading} className="text-white inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight bg-gradient-to-r from-amber-500/20 to-amber-500/20 border border-amber-500/40 hover:from-amber-500/30 hover:to-amber-500/30 transition-colors disabled:opacity-60">
                        {loading ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>
                    </div>

                    {done && <div className="md:col-span-2 text-sm text-emerald-400">Recebemos sua mensagem. Em breve entraremos em contato.</div>}
                    {error && <div className="md:col-span-2 text-sm text-red-400">{error}</div>}
                </form>
            </div>
        </div>
    </section>
  );
}

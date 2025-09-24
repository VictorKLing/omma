"use client";
import React, { useState } from 'react';

export default function LeadForm() {
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
        <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight bg-gradient-to-r from-amber-500/20 to-amber-500/20 border border-amber-500/40 hover:from-amber-500/30 hover:to-amber-500/30 transition-colors disabled:opacity-60">
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </div>

      {done && <div className="md:col-span-2 text-sm text-emerald-400">Recebemos sua mensagem. Em breve entraremos em contato.</div>}
      {error && <div className="md:col-span-2 text-sm text-red-400">{error}</div>}
    </form>
  );
}

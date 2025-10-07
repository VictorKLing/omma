'use client';
import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
const urlForSafe = (source: any) => {
  if (!source || !source.asset?._ref) return '';
  return builder.image(source).url();
};

const Section06: React.FC = () => {
  const [section06, setSection06] = useState<any>(null);

  useEffect(() => {
    const fetchSection06 = async () => {
      try {
        const query = `*[_type == "home"][0]{
          section06{
            cta{ title, subtitle, buttons[]{ text, href } },
            sobre{ title, subtitle, description, images[] },
            depoimento{ photo, text, location, extra },
            parceria{ title, description, button{ text, href }, images[] },
            contato{ title }
          }
        }`;
        const data = await sanityClient.fetch(query);
        setSection06(data.section06 || null);
      } catch (error) {
        console.error('Erro ao buscar Section06:', error);
      }
    };

    fetchSection06();
  }, []);

  const cta = section06?.cta;
  const sobre = section06?.sobre;
  const depoimento = section06?.depoimento;
  const parceria = section06?.parceria;
  const contato = section06?.contato;

  return (
    <>
      {/* CTA */}
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
              <a
                href={cta?.buttons?.[0]?.href || '#'}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                {cta?.buttons?.[0]?.text || 'Entrar em contato'}
              </a>
              <a
                href={cta?.buttons?.[1]?.href || '#'}
                className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-4 py-2.5 text-sm font-medium text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-400 transition"
              >
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
              <img
                src={sobre?.images?.[0] ? urlForSafe(sobre.images[0]) : 'https://via.placeholder.com/400x320'}
                alt="Equipe de engenharia em operação"
                className="h-[320px] md:h-[420px] w-full object-cover"
              />
              <div className="absolute -top-1 -right-1 h-16 w-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-br-2xl rounded-tl-2xl shadow-[0_0_40px_-10px] shadow-yellow-500/50"></div>
            </div>
            <div className="hidden md:flex absolute -right-8 top-16">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={sobre?.images?.[1] ? urlForSafe(sobre.images[1]) : 'https://via.placeholder.com/160x160'}
                  alt="Profissional de obra"
                  className="h-40 w-40 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-yellow-400">
              {sobre?.title || 'QUEM SOMOS?'}
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--text)]/80">{sobre?.subtitle || 'Soluções completas para ambientes de alto padrão.'}</p>
            <div className="mt-4 text-sm md:text-base text-[var(--text)]/70">
              {sobre?.description?.map((block: any, i: number) => (
                <p key={i}>{block.children?.map((c: any) => c.text).join('')}</p>
              )) || 'Descrição padrão da seção.'}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={depoimento?.photo ? urlForSafe(depoimento.photo) : 'https://via.placeholder.com/56'}
                alt="Cliente"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-yellow-500/30"
              />
              <div className="flex-1">
                <p className="text-base md:text-lg text-white/80">
                  {depoimento?.text?.map((block: any) => block.children?.map((c: any) => c.text).join('')).join(' ') ||
                    'Depoimento padrão do cliente.'}
                </p>
                <div className="mt-2 flex items-center gap-2 text-sm text-white/50">
                  <span>{depoimento?.location || 'São Paulo, SP'}</span>
                  {depoimento?.extra && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{depoimento.extra}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parceria */}
      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
              <h3 className="text-[26px] md:text-[32px] font-semibold tracking-tight text-yellow-400">{parceria?.title || 'Seja um arquiteto parceiro da OMMA'}</h3>
              <div className="mt-4 text-[15px] leading-7 text-[var(--text)]-300">
                {parceria?.description?.map((block: any, i: number) => (
                  <p key={i}>{block.children?.map((c: any) => c.text).join('')}</p>
                )) || 'Descrição padrão da parceria.'}
              </div>
              <div className="mt-6">
                <a
                  href={parceria?.button?.href || '#'}
                  className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-5 py-3 text-sm font-medium text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-400 transition"
                >
                  {parceria?.button?.text || 'SEJA UM ARQUITETO PARCEIRO AGORA!'}
                </a>
              </div>
            </div>

            <div className="relative">
              {parceria?.images?.map((img: any, i: number) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 mb-4">
                  <img src={urlForSafe(img) || 'https://via.placeholder.com/300x200'} alt={`Imagem parceria ${i}`} className="h-40 w-full object-cover md:h-48" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--theme)]/60 via-[var(--theme)]/60 to-[var(--theme)]"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur px-4 sm:px-8 py-8 md:py-10 shadow-2xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold text-white">{contato?.title || 'Entre em contato'}</h3>
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
                        <span className='text-white'>Enviar Mensagem</span>
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

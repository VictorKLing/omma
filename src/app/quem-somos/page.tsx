import { sanityClient } from "@/lib/sanity";
import React from "react";

interface Bloco {
  titulo?: string;
  conteudo?: any[];
  imagens?: { asset: { url: string }; alt?: string }[];
}

interface CallToAction {
  text?: string;
  href?: string;
}

interface QuemSomosData {
  blocos?: Bloco[];
  callToAction?: CallToAction;
}

async function getData(): Promise<QuemSomosData | null> {
  try {
    const query = `*[_type == "quem-somos"][0]{
      blocos[]{
        titulo,
        conteudo,
        imagens[]{ asset->{url}, alt }
      },
      callToAction { text, href }
    }`;
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error("Erro ao buscar dados (quem-somos):", error);
    return null;
  }
}

export default async function QuemSomosPage() {
  const data = await getData();

  if (!data) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-20">
        <p className="text-center text-red-500">Erro ao carregar conteúdo.</p>
      </section>
    );
  }

  const totalBlocos = data.blocos?.length || 0;

  return (
    <section id="sobre" className="relative overflow-hidden pt-[120px] md:pt-[184px]">
      {/* Background decorativo */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>

      {data.blocos?.map((bloco, index) => (
        <div
          key={index}
          className="mx-auto max-w-7xl px-4 pb-8 md:pb-24 grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Imagem */}
          {bloco.imagens?.[0] && (
            <div className={`relative ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <img
                  src={bloco.imagens[0].asset.url}
                  alt={bloco.imagens[0].alt || bloco.titulo || "Imagem"}
                  className="h-[320px] md:h-[420px] w-full object-cover"
                />
                <div className="absolute -top-1 -right-1 h-16 w-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-br-2xl rounded-tl-2xl shadow-[0_0_40px_-10px] shadow-yellow-500/50"></div>
              </div>

              {bloco.imagens?.[1] && (
                <div className="hidden md:flex absolute -right-8 top-16">
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={bloco.imagens[1].asset.url}
                      alt={bloco.imagens[1].alt || "Imagem secundária"}
                      className="h-40 w-40 object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Texto */}
          <div className={`relative ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
            {bloco.titulo && (
              <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-yellow-400">
                {bloco.titulo}
              </h2>
            )}
            {bloco.conteudo?.map((c: any, idx: number) => (
              <p key={idx} className="mt-4 text-sm md:text-base text-[var(--text)]/70">
                {c.children?.map((child: any) => child.text).join(" ")}
              </p>
            ))}

            {/* Call to Action apenas no último bloco */}
            {index === totalBlocos - 1 && data.callToAction?.text && data.callToAction?.href && (
              <div className="mx-auto max-w-7xl mt-10 text-center flex items-center gap-4">
                <a
                  href={data.callToAction.href}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 hover:from-yellow-500/30 hover:to-amber-500/30 transition-colors"
                >
                  <span className="text-yellow-400">{data.callToAction.text}</span>
                </a>
                <div className="hidden sm:flex items-center gap-2 text-[var(--text)]/60 text-sm">
                  <span>Compromisso com prazos e segurança</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

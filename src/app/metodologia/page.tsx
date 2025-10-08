import Timeline from '../../components/shared/Timeline';
import { sanityClient } from '@/lib/sanity';

interface MetodologiaData {
  titulo?: string;
  texto?: any[]; // array de blocos do Sanity
  imagens?: { asset: { url: string }; alt?: string }[];
  botao?: { text?: string; href?: string };
}

async function getData(): Promise<MetodologiaData | null> {
  try {
    const query = `*[_type == "metodologia"][0]{
      titulo,
      texto,
      imagens[]{ asset->{url}, alt },
      botao { text, href }
    }`;
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error("Erro ao buscar dados (metodologia):", error);
    return null;
  }
}

export default async function MetodologiaPage() {
  const data = await getData();

  if (!data) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-20">
        <p className="text-center text-red-500">Erro ao carregar conteúdo.</p>
      </section>
    );
  }

  return (
    <section id="contato" className="relative pt-[146px] md:pt-[184px]">
      <div className="sm:px-6 sm:pb-24 max-w-7xl mr-auto ml-auto pr-4 pb-16 pl-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left images */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-4 sm:gap-6">
              {data.imagens?.[0] && (
                <div className="col-span-6 sm:col-span-8">
                  <div className="aspect-[470/419] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                    <img
                      src={data.imagens[0].asset.url}
                      alt={data.imagens[0].alt || "Imagem 1"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              {data.imagens?.[1] && (
                <div className="col-span-6 sm:col-span-4">
                  <div className="aspect-[326/289] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                    <img
                      src={data.imagens[1].asset.url}
                      alt={data.imagens[1].alt || "Imagem 2"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              )}
              {data.imagens?.[2] && (
                <div className="col-span-6 sm:col-span-5 sm:col-start-5">
                  <div className="aspect-square w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                    <img
                      src={data.imagens[2].asset.url}
                      alt={data.imagens[2].alt || "Imagem 3"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right content */}
          <div className="order-1 lg:order-2">
            {data.titulo && (
              <h2
                className="text-yellow-400 text-[28px] sm:text-[35px] font-bold tracking-tight leading-[1.25]"
                style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}
              >
                {data.titulo}
              </h2>
            )}

            <div className="mt-5">
              {data.texto?.map((c: any, idx: number) => (
                <p
                  key={idx}
                  className="mt-4 text-[17px] sm:text-[18px] leading-7 text-[var(--text)]/90"
                  style={{ fontFamily: 'Exo, Inter', fontWeight: 400 }}
                >
                  {c.children?.map((child: any) => child.text).join(" ")}
                </p>
              ))}
            </div>

            {data.botao?.text && data.botao?.href && (
              <div className="mt-8">
                <a
                  href={data.botao.href}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-9 py-4 text-[15px] text-white hover:bg-amber-400/10 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-white/10 hover:ring-white/20"
                  style={{ fontFamily: 'DM Sans, Inter' }}
                >
                  {data.botao.text}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-8 pb-32">
        <Timeline />
      </div>
    </section>
  );
}

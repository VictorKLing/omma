import { getHomeData } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';

const Section05 = async () => {
  const data = await getHomeData();
  const metodologia = data?.metodologia;

  return (
    <section className="relative py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-[24px] md:text-[32px] font-semibold tracking-tight text-white">
            {metodologia?.title || "METODOLOGIA OMMA"}
          </h3>
          <p className="mt-2 text-sm md:text-base text-neutral-400">
            {metodologia?.subtitle || "O caminho para o sucesso do seu projeto"}
          </p>
        </div>

        <div className="relative mt-10 md:mt-14">
          <div className="absolute left-0 right-0 top-[68px] h-px bg-gradient-to-r from-yellow-400/20 via-yellow-400/40 to-yellow-400/20"></div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {metodologia?.cards?.map((card: any, idx: number) => (
              <div className="relative" key={idx}>
                <div className="absolute left-1/2 top-[60px] -translate-x-1/2">
                  <span className="block h-3 w-3 rounded-full bg-yellow-400 ring-2 ring-yellow-300/30"></span>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-[34px] font-semibold tracking-tight text-white/90">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-white text-neutral-800 p-5 shadow-[0_0_40px_rgba(250,204,21,0.12)]">
                  <div
                    className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-yellow-300 ring-1 ring-yellow-300/40"
                    dangerouslySetInnerHTML={{ __html: card.svg }}
                  />
                  <h4 className="text-[16px] font-semibold tracking-tight">{card.title}</h4>
                  <div className="mt-2 text-[13px] text-neutral-600">
                    <PortableText value={card.description} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {metodologia?.button && (
            <div className="mt-10 flex justify-center">
              <a
                href={metodologia.button.href || '#'}
                className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-6 py-3 text-sm font-medium text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-400 transition"
              >
                {metodologia.button.text || "SOLICITE UM ORÇAMENTO AGORA!"}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section05;

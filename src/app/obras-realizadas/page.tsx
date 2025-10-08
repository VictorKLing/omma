'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { sanityClient, urlFor } from '../../lib/sanity';

interface Projeto {
  titulo: string;
  local: string;
  area: string;
  tempo: string;
  descricao: string;
  imagens: { asset: { _ref: string } }[];
}

const Section04: React.FC = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const query = `*[_type == "obrasrealizadas"][0]{
          projetos[]{
            titulo,
            local,
            area,
            tempo,
            descricao,
            imagens
          }
        }`;
        const data = await sanityClient.fetch(query);
        if (data && data.projetos) {
          setProjetos(data.projetos);
        }
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

  if (!projetos.length) {
    return <p className="text-center py-20">Carregando projetos...</p>;
  }

  return (
    <section className="relative py-10">
      <div className="px-10 space-y-20 pt-[120px] md:pt-[154px]">
        <h1 className="text-center text-[var(--primary)] text-[28px] sm:text-[35px] font-bold tracking-tight mb-4" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
          Obras Realizadas
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-[var(--text)]/90 max-w-[900px] mx-auto text-center " style={{ fontFamily: "'DM Sans', Inter", fontWeight: 500 }}>
          Descubra um pouco do que já construímos, junto aos nossos parceiros, ao longo desses anos, para clientes muito especiais.
        </p>
        {projetos.map((projeto, index) => (
          <div key={index}>
            <div className="mt-20 max-w-5xl mx-auto relative h-[600px] rounded-2xl overflow-hidden">
              {/* Slider de imagens */}
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop
                className="w-full h-full"
              >
                {projeto.imagens.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={urlFor(img).url()}
                      alt={projeto.titulo}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Gradiente fixo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Conteúdo fixo */}
              <div className="absolute inset-0 sm:p-5 md:p-7 lg:p-8 flex flex-col h-full p-4">
                <div className="mt-auto z-30 bg-black/80 py-8 px-6 rounded-2xl">
                  <h2
                    className="text-2xl md:text-3xl tracking-tight font-semibold text-[var(--primary)] drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]"
                    style={{ fontFamily: 'Exo, Inter' }}
                  >
                    {projeto.titulo}
                  </h2>
                  <ul className="mt-4 flex flex-col gap-2 text-white">
                    <li>Local: {projeto.local}</li>
                    <li>Área de intervenção: {projeto.area}</li>
                    <li>Tempo total da intervenção: {projeto.tempo}</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="max-w-5xl mx-auto mt-10">{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section04;

'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { sanityClient } from '../../lib/sanity';

export default function SwiperExpertise() {
  const [content, setContent] = useState<{
    titulo?: string;
    subtitulo?: string;
    galeria?: { url?: string; alt?: string }[];
    cards?: { titulo: string; subtitulo: string }[];
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "atuacao"][0]{
          titulo,
          subtitulo,
          galeria[]{ asset->{url}, alt },
          cards[]{ titulo, subtitulo }
        }`;

        const data = await sanityClient.fetch(query);

        setContent({
          titulo: data?.titulo || '',
          subtitulo: data?.subtitulo || '',
          galeria: data?.galeria?.map((img: any) => ({
            url: img?.asset?.url,
            alt: img?.alt || '',
          })) || [],
          cards: data?.cards || [],
        });
      } catch (err) {
        console.error('Erro ao buscar dados (atuacao):', err);
        setContent({});
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="sm:px-6 sm:pb-24 max-w-7xl mr-auto ml-auto pr-4 pb-16 pl-4 pt-[120px] md:pt-[184px]">
        {/* Título e subtítulo */}
        <h1 className="text-center text-[var(--primary)] text-[28px] sm:text-[35px] font-bold tracking-tight mb-4" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
          {content.titulo}
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-[var(--text)]/90 max-w-[900px] mx-auto text-center pb-10" style={{ fontFamily: "'DM Sans', Inter", fontWeight: 500 }}>
          {content.subtitulo}
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, el: '.custom-pagination' }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {content.galeria && content.galeria.length > 0 ? (
            content.galeria.map((s, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white/10 p-2 rounded-xl text-center">
                  <img
                    src={s.url}
                    alt={s.alt || `slide-${idx}`}
                    className="mx-auto rounded object-cover h-[285px]"
                  />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="bg-white/10 p-6 rounded-xl text-center"></div>
            </SwiperSlide>
          )}
          <div className="custom-pagination mt-6 flex items-center justify-center gap-2"></div>
        </Swiper>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {content.cards && content.cards.length > 0 ? (
            content.cards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-lg p-5 hover:bg-white/[0.07] transition"
              >
                <p className="text-lg font-bold text-[var(--primary)]" style={{ fontFamily: 'Manrope, Inter' }}>
                  {card.titulo}
                </p>
                <p className="text-sm text-[var(--text)]/70 mt-4">{card.subtitulo}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-white/70"></p>
          )}
        </div>
      </div>
    </section>
  );
}

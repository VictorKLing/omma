'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { sanityClient } from '../../lib/sanity';;

const Section04: React.FC = () => {
    const [brands, setBrands] = useState<string[]>([]);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const query = `*[_type == "home"][0]{ clientes { title, brands } }`;
                const data = await sanityClient.fetch(query);
                setBrands(data?.clientes?.brands || []);
                setTitle(data?.clientes?.title || "");
            } catch (error) {
                console.error("Erro ao buscar clientes:", error);
            }
        };
        fetchBrands();
    }, []);

    return (
        <section className="relative py-10 md:py-16">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="mb-8 text-center text-[22px] md:text-[26px] font-semibold tracking-tight text-yellow-300">
                    {title || "Nossos clientes"}
                </h2>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true, el: '.custom-pagination' }}
                        breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 6 },
                        }}
                    >
                        {brands.map((brand: string, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm font-medium text-neutral-300">
                            {brand}
                            </div>
                        </SwiperSlide>
                        ))}
                        <div className="custom-pagination mt-6 flex items-center justify-center gap-2"></div>

                    </Swiper>

                    {/* <div className="mt-6 flex items-center justify-center gap-2">
                        <span className="h-1.5 w-8 rounded-full bg-yellow-400/80"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/40"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/40"></span>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Section04;

'use client';
import { PortableText } from '@portabletext/react';
import React, { useState, useEffect } from 'react';
import { sanityClient, urlFor } from '../../lib/sanity';

const Section02: React.FC = () => {
    const [text, setText] = useState<any[]>([]);
    const [items, setItems] = useState<{ title: string }[]>([]);
    const [button, setButton] = useState<{ text: string; href: string } | null>(null);
    const [sectionImages, setSectionImages] = useState({
        sectionImage1: null,
        sectionImage2: null,
        sectionImage3: null,
    });
    
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const query = `*[_type == "home"][0]{
                    section1 {
                        section1Text,
                        items[]{
                            title
                        },
                        button {
                            text,
                            href
                        },
                        sectionImage1,
                        sectionImage2,
                        sectionImage3
                    }
                }`;
                const data = await sanityClient.fetch(query);
                if (data?.section1?.section1Text) setText(data.section1.section1Text);
                if (data?.section1?.items) setItems(data.section1.items);
                if (data?.section1) {setText(data.section1.section1Text);setButton(data.section1.button);}
                setSectionImages({
                    sectionImage1: data.section1.sectionImage1,
                    sectionImage2: data.section1.sectionImage2,
                    sectionImage3: data.section1.sectionImage3,
                });
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        fetchContent();
    }, []);
    return (
        <section className="relative">
            <div className="sm:px-6 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Left images */}
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-6 sm:grid-cols-12 gap-4 sm:gap-6">
                            <div className="col-span-6 sm:col-span-8">
                                <div className="aspect-[470/419] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                                    <img 
                                        src={sectionImages.sectionImage1 ? urlFor(sectionImages.sectionImage1).url() : ''} 
                                        alt="Imagem 1 da seção" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <div className="aspect-[326/289] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                                    <img 
                                        src={sectionImages.sectionImage2 ? urlFor(sectionImages.sectionImage2).url() : ''} 
                                        alt="Imagem 2 da seção" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-5 sm:col-start-5">
                                <div className="aspect-square w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
                                    <img 
                                        src={sectionImages.sectionImage3 ? urlFor(sectionImages.sectionImage3).url() : ''} 
                                        alt="Imagem 3 da seção" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-[28px] sm:text-[35px] font-bold tracking-tight leading-[1.25]" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
                            <span >Gestão completa</span> para obras <span className="text-amber-400">rápidas</span> e eficientes
                        </h2>

                        <div className="mt-5">
                            <PortableText
                                value={text}
                                components={{
                                    block: {
                                        normal: ({ children }) => <p className="text-[17px] sm:text-[18px] leading-7">{children}</p>,
                                        h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
                                        h2: ({ children }) => <h2 className="text-xl font-semibold">{children}</h2>,
                                        blockquote: ({ children }) => <blockquote className="border-l-4 border-amber-400 pl-4 italic">{children}</blockquote>
                                    },
                                    marks: {
                                        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                                        em: ({ children }) => <em className="italic">{children}</em>
                                    }
                                }}
                            />
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {items.map((item, i) => (
                                <div className="flex items-center gap-3" key={i}>
                                <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/60 ring-1 ring-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-400">
                                    <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <span className="text-[18px] text-white" style={{ fontFamily: 'Exo, Inter', fontWeight: 600 }}>{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href={button?.href} className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-9 py-4 text-[15px] text-white hover:bg-amber-400/10 transition shadow-[0_4px_10px_rgba(20,20,42,0.08)] ring-1 ring-inset ring-white/10 hover:ring-white/20" style={{ fontFamily: 'DM Sans, Inter' }}>
                                {button?.text || "FAÇA SEU PROJETO COM A OMMA!"}
                            </a>
                        </div>
                    </div>
                </div>

                        <div className="mt-16 border-t border-white/10" />

                        {/* Expertise grid */}
                        <div className="mt-10">
                            <h3 className="text-center text-[28px] sm:text-[35px] font-bold tracking-tight" style={{ fontFamily: 'Exo, Inter', fontWeight: 700 }}>
                                <span className="text-amber-400">Expertise</span> OMMA em diversos setores
                            </h3>

                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {[
                                    { label: 'Escritórios', svg: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path>' },
                                    { label: 'Saúde', svg: '<path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle>' },
                                    { label: 'Varejo', svg: '<path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>' },
                                    { label: 'Bancos', svg: '<rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path>' },
                                    { label: 'Educação', svg: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>' },
                                    { label: 'Indústria', svg: '<path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path>' },
                                ].map((item, idx) => (
                                    <div key={idx} className="rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-lg p-5 hover:bg-white/[0.07] transition">
                                        <div className="flex items-center gap-4">
                                            <div className="h-16 w-16 rounded-2xl bg-black/60 ring-1 ring-white/10 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-amber-400" dangerouslySetInnerHTML={{ __html: item.svg }} />
                                            </div>
                                            <div>
                                                <p className="text-lg" style={{ fontFamily: 'Manrope, Inter', fontWeight: 700 }}>{item.label}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
        </section>
    );
};

export default Section02;
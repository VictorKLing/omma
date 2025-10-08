'use client'
import { useEffect, useState } from 'react'
import { sanityClient } from '../../lib/sanity'
import Form from '../../components/lp/LeadForm'
import { Facebook, Instagram, Linkedin } from "lucide-react";

const iconsMap: any = {
  facebook: <Facebook size={26} />,
  instagram: <Instagram size={26} />,
  linkedin: <Linkedin size={26} />,
};
const Contato = () => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "contato"][0]{
        tituloPrincipal,
        endereco,
        telefone,
        emails,
        redesSociais[]{nome, url, icone}
      }`
      const result = await sanityClient.fetch(query)
      setData(result)
    }
    fetchData()
  }, [])

  if (!data) return null

  return (
    <section id="contato" className="relative md:pt-[114px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--theme)] via-[rgba(66,66,66,0.7)] to-[var(--theme)]"></div>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur px-4 sm:px-8 py-8 md:py-10 shadow-2xl">
          
          {/* título principal */}
          <h3 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold text-white">
            {data.tituloPrincipal}
          </h3>

          <Form />

          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl mb-5 mt-10 tracking-tight font-semibold text-white">Contato</h3>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-20">
              <div>
                <h5 className="text-sm tracking-tight font-semibold text-[var(--primary)]">Endereço:</h5>
                <ul className="mt-3 space-y-2 text-sm text-white">
                  <li>{data.endereco}</li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm tracking-tight font-semibold text-[var(--primary)]">Telefone:</h5>
                <ul className="mt-3 space-y-2 text-sm text-white">
                  <li>{data.telefone}</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-20 mt-10">
              <div>
                <h5 className="text-sm tracking-tight font-semibold text-[var(--primary)]">E-mails:</h5>
                <ul className="mt-3 space-y-2 text-sm text-white">
                  {data.emails?.map((email: string, idx: number) => (
                    <li key={idx}>{email}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm tracking-tight font-semibold text-[var(--primary)]">Redes sociais:</h5>
                <ul className="flex items-center gap-3 mt-3 space-y-2 text-sm text-white">
                  {data.redesSociais?.map((rede: any, idx: number) => (
                    <li key={idx} className="">
                        <a href={rede.url} className='' target="_blank" rel="noopener noreferrer">
                            {iconsMap[rede.nome.toLowerCase()]}
                        </a>
                    </li>
                    ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
